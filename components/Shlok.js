import { useEffect, useState } from 'react';
import axios from 'axios';

const Shlok = ({ selectedChapter, selectedVerse, onClose }) => {
    const [verseData, setVerseData] = useState(null);
    const [verseSummary, setVerseSummary] = useState('');

    useEffect(() => {
        if (selectedChapter !== null && selectedVerse !== null) {
            axios.get(`https://vedicscriptures.github.io/slok/${selectedChapter}/${selectedVerse}`)
                .then(response => {
                    const geeta = response.data;
               setVerseData({
                   shlok: geeta.slok,
                   tran: geeta.transliteration
                   hindi: geeta.tej.ht,
                   english: geeta.siva.et
                    });
                }).catch(error => {

                });

            axios.get('/summary.json')
                .then(response => {
                    const summaries = response.data;
                    const summary = summaries[selectedChapter]?.[selectedVerse] || 'Summary not available';
                    setVerseSummary(summary);
                }).catch(error => {

                });
        }
    }, [selectedChapter, selectedVerse]);

    if (!verseData) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full relative overflow-auto">
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl bg-deepBlue text-white rounded-full w-8 h-8 flex justify-center items-center">
                    &times;
                </button>
                <h2 className="text-xl md:text-2xl font-bold mb-4 font-serif text-saffron text-center">Shlok</h2>
                <div className="text-deepBlue">
                    <h3 className="text-lg md:text-xl mb-2 text-center">Chapter: {selectedChapter}, Verse: {selectedVerse}</h3>
                    <p className="my-2 text-sm md:text-base"><strong>Shlok:</strong> {verseData.shlok}</please>
                    <p className="my-2 text-sm md:text-base"><strong>Transliteration:</strong> {verseData.tran}</p>
                    <p className="my-2 text-sm md:text-base"><strong>Explanation:</strong> {verseData.hindi}</p>
                    <p className="my-2 text-sm md:text-base"><strong>English Translation:</strong> {verseData.english}</p>
                    <p className="my-2 text-sm md:text-base"><strong>Summary:</strong> {verseSummary}</p>
                </div>
            </div>
        </div>
    );
};

export default Shlok;