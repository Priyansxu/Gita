// index:

import { useState } from 'react';
import Header from '../components/Header';
import Adhyay from '../components/Adhyay';
import Shloks from '../components/Shloks';

const Home = () => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedShlok, setSelectedShlok] = useState(null);

    const handleShlokClick = (chapter, shlok) => {
        setSelectedChapter(chapter);
        setSelectedShlok(shlok);
    };

    const handleClose = () => {
        setSelectedChapter(null);
        setSelectedShlok(null);
    };

    return (
        <div className="relative">
            <Header />
            <Adhyay onShlokClick={handleShlokClick} />
            {selectedChapter !== null && selectedShlok !== null && (
                <Shloks 
                    selectedChapter={selectedChapter} 
                    selectedShlok={selectedShlok} 
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Home;







// Adhyaya

import { useState } from 'react';

const Adhyay = ({ onShlokClick }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const chapters = [
        { number: 1, title: "Arjun Vishad Yog : Lamenting the Consequences of War" },
        { number: 2, title: "Sankhya Yog : The Yog of Analytical Knowledge" },
        { number: 3, title: "Karm Yog : The Yog of Action" },
        { number: 4, title: "Jñāna Karm Sanyās Yog : The Yog of Knowledge and the Disciplines of Action" },
        { number: 5, title: "Karm Sanyās Yog : The Yog of Renunciation" },
        { number: 6, title: "Dhyān Yog : The Yog of Meditation" },
        { number: 7, title: "Jñāna Vijñāna Yog : Yog through the Realization of Divine Knowledge" },
        { number: 8, title: "Akshar Brahma Yog : The Yog of the Eternal God" },
        { number: 9, title: "Rāja Vidyā Yog : Yog through the King of Sciences" },
        { number: 10, title: "Vibhūti Yog : Yog through Appreciating the Infinite Opulences of God" },
        { number: 11, title: "Vishwaroop Darishan Yog : Yog through Beholding the Cosmic Form of God" },
        { number: 12, title: "Bhakti Yog : The Yog of Devotion" },
        { number: 13, title: "Kṣhetra Kṣhetrajña Vibhāga Yog : Yog through Distinguishing the Field and the Knower of the Field" },
        { number: 14, title: "Guṇa Traya Vibhāga Yog : Yog through Understanding the Three Modes of Material Nature" },
        { number: 15, title: "Purushottam Yog : The Yog of the Supreme Divine Personality" },
        { number: 16, title: "Daivāsura Sampad Vibhāga Yog : Yog through Discerning the Divine and Demoniac Natures" },
        { number: 17, title: "Shraddhā Traya Vibhāga Yog : Yog through Discerning the Three Divisions of Faith" },
        { number: 18, title: "Mokṣha Sanyās Yog : Yog through the Perfection of Renunciation and Surrender" },
    ];

    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter === selectedChapter ? null : chapter);
    };

    return (
        <section className="my-8 px-4">
            <h2 className="text-2xl font-bold mb-4 text-saffron">Adhyay</h2>
            {chapters.map((chapter) => (
                <div key={chapter.number} className="mb-6">
                    <div 
                        className="flex justify-between items-center bg-saffron text-deepBlue py-2 px-4 rounded-t cursor-pointer hover:bg-deepBlue hover:text-saffron transition duration-200"
                        onClick={() => handleChapterClick(chapter.number)}
                    >
                        <span>Chapter {chapter.number}</span>
                        <span>View &raquo;</span>
                    </div>
                    <div className="bg-lightSaffron text-deepBlue py-2 px-4 rounded-b">
                        {chapter.title}
                    </div>
                    {selectedChapter === chapter.number && (
                        <div className="grid grid-cols-8 gap-2 mt-4">
                            {Array.from({ length: 43 }, (_, i) => i + 1).map((shlok) => (
                                <button 
                                    key={shlok} 
                                    onClick={() => onShlokClick(chapter.number, shlok)} 
                                    className="py-2 px-4 border border-gray-300 rounded hover:bg-gray-200 transition duration-200"
                                >
                                    {shlok}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Adhyay;





// Shloks

import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const Shloks = ({ selectedChapter, selectedShlok, onClose }) => {
    const [shlokData, setShlokData] = useState(null);

    useEffect(() => {
        if (selectedChapter !== null && selectedShlok !== null) {
            axios.get(`https://vedicscriptures.github.io/slok/${selectedChapter}/${selectedShlok}`)
                .then(response => {
                    const geeta = response.data;
                    setShlokData({
                        shlok: geeta.slok,
                        tej: geeta.tej.ht,
                        trans: geeta.siva.et
                    });
                }).catch(error => {
                    console.error('Error fetching shlok data:', error);
                });
        }
    }, [selectedChapter, selectedShlok]);

    return (
        <Modal isOpen={selectedChapter !== null && selectedShlok !== null} onClose={onClose}>
            {shlokData ? (
                <div className="text-deepBlue">
                    <h3 className="text-xl mb-2">Chapter: {selectedChapter}, Verse: {selectedShlok}</h3>
                    <p><strong>Shlok:</strong> {shlokData.shlok}</p>
                    <p><strong>Explanation:</strong> {shlokData.tej}</p>
                    <p><strong>English Translation:</strong> {shlokData.trans}</p>
                </div>
            ) : (
                <p className="text-deepBlue">Select a shlok to see the details.</p>
            )}
        </Modal>
    );
};

export default Shloks;