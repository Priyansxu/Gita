const Adhyay = ({ onShlokClick }) => {
    const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">Adhyay</h2>
            {chapters.map((chapter) => (
                <div key={chapter} className="mb-6">
                    <h3 className="text-xl mb-2">Chapter {chapter}</h3>
                    <div className="grid grid-cols-8 gap-2">
                        {Array.from({ length: 72 }, (_, i) => i + 1).map((shlok) => (
                            <button 
                                key={shlok} 
                                onClick={() => onShlokClick(chapter, shlok)} 
                                className="py-2 px-4 border border-gray-300 rounded hover:bg-gray-200"
                            >
                                {shlok}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Adhyay;