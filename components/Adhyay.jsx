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
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">Adhyay</h2>
            {chapters.map((chapter) => (
                <div key={chapter.number} className="mb-6">
                    <div 
                        className="bg-orange-400 text-white py-2 px-4 rounded cursor-pointer hover:bg-orange-500 transition duration-200"
                        onClick={() => handleChapterClick(chapter.number)}
                    >
                        Chapter {chapter.number}: {chapter.title}
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