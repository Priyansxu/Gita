import { useState } from 'react';

const Adhyay = ({ onShlokClick }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const chapters = [
        { number: 1, title: "Arjun Vishad Yog : Lamenting the Consequences of War" },
        { number: 2, title: "Sankhya Yog : The Yog of Analytical Knowledge" },
        { number: 3, title: "Karm Yog : The Yog of Action" },
        // Add the rest of the chapters here...
    ];

    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter === selectedChapter ? null : chapter);
    };

    return (
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">Adhyay</h2>
            {chapters.map((chapter) => (
                <div key={chapter.number} className="mb-6">
                    <h3 
                        className="text-xl mb-2 cursor-pointer text-blue-600"
                        onClick={() => handleChapterClick(chapter.number)}
                    >
                        Chapter {chapter.number}: {chapter.title}
                    </h3>
                    {selectedChapter === chapter.number && (
                        <div className="grid grid-cols-8 gap-2">
                            {Array.from({ length: 72 }, (_, i) => i + 1).map((shlok) => (
                                <button 
                                    key={shlok} 
                                    onClick={() => onShlokClick(chapter.number, shlok)} 
                                    className="py-2 px-4 border border-gray-300 rounded hover:bg-gray-200"
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