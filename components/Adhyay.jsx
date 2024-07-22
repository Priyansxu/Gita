import { useState } from 'react';

const Adhyay = ({ onShlokClick }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const chapters = [
        { number: 1, title: "Arjun Vishad Yog : Lamenting the Consequences of War", verses: 47 },
        { number: 2, title: "Sankhya Yog : The Yog of Analytical Knowledge", verses: 72 },
        { number: 3, title: "Karm Yog : The Yog of Action", verses: 43 },
        { number: 4, title: "Jñāna Karm Sanyās Yog : The Yog of Knowledge and the Disciplines of Action", verses: 42 },
        { number: 5, title: "Karm Sanyās Yog : The Yog of Renunciation", verses: 29 },
        { number: 6, title: "Dhyān Yog : The Yog of Meditation", verses: 47 },
        { number: 7, title: "Jñāna Vijñāna Yog : Yog through the Realization of Divine Knowledge", verses: 30 },
        { number: 8, title: "Akshar Brahma Yog : The Yog of the Eternal God", verses: 28 },
        { number: 9, title: "Rāja Vidyā Yog : Yog through the King of Sciences", verses: 34 },
        { number: 10, title: "Vibhūti Yog : Yog through Appreciating the Infinite Opulences of God", verses: 42 },
        { number: 11, title: "Vishwaroop Darishan Yog : Yog through Beholding the Cosmic Form of God", verses: 55 },
        { number: 12, title: "Bhakti Yog : The Yog of Devotion", verses: 20 },
        { number: 13, title: "Kṣhetra Kṣhetrajña Vibhāga Yog : Yog through Distinguishing the Field and the Knower of the Field", verses: 35 },
        { number: 14, title: "Guṇa Traya Vibhāga Yog : Yog through Understanding the Three Modes of Material Nature", verses: 27 },
        { number: 15, title: "Purushottam Yog : The Yog of the Supreme Divine Personality", verses: 20 },
        { number: 16, title: "Daivāsura Sampad Vibhāga Yog : Yog through Discerning the Divine and Demoniac Natures", verses: 24 },
        { number: 17, title: "Shraddhā Traya Vibhāga Yog : Yog through Discerning the Three Divisions of Faith", verses: 28 },
        { number: 18, title: "Mokṣha Sanyās Yog : Yog through the Perfection of Renunciation and Surrender", verses: 78 },
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
                            {Array.from({ length: chapter.verses }, (_, i) => i + 1).map((shlok) => (
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