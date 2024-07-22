// components/Adhyay.js
const Adhyay = ({ onShlokClick }) => {
    const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <section>
            <h2>Adhyay</h2>
            {chapters.map((chapter) => (
                <div key={chapter}>
                    <h3>Chapter {chapter}</h3>
                    <div className="grid">
                        {Array.from({ length: 72 }, (_, i) => i + 1).map((shlok) => (
                            <button key={shlok} onClick={() => onShlokClick(chapter, shlok)}>
                                {shlok}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <style jsx>{`
                .grid {
                    display: grid;
                    grid-template-columns: repeat(8, 1fr);
                    gap: 10px;
                    justify-content: center;
                    align-items: center;
                }
                button {
                    padding: 10px;
                    border: 1px solid #000;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </section>
    );
};

export default Adhyay;
