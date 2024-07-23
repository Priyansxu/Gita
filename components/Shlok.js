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
                        tej: geeta.tej.ht,
                        trans: geeta.siva.et
                    });
                }).catch(error => {
                    console.error('Error fetching verse data:', error);
                });

            axios.get('/summary.json')
                .then(response => {
                    const summaries = response.data;
                    const summary = summaries[selectedChapter]?.[selectedVerse] || 'Summary not available';
                    setVerseSummary(summary);
                }).catch(error => {
                    console.error('Error fetching verse summaries:', error);
                });
        }
    }, [selectedChapter, selectedVerse]);

    if (!verseData) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl bg-deepBlue text-white rounded-full w-8 h-8 flex justify-center items-center">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 font-serif text-saffron text-center">Shlok</h2>
                <div className="text-deepBlue">
                    <h3 className="text-xl mb-2 text-center">Chapter: {selectedChapter}, Verse: {selectedVerse}</h3>
                    <p className="my-3"><strong>Shlok:</strong> {verseData.shlok}</p>
                    <p className="my-3"><strong>Explanation:</strong> {verseData.tej}</p>
                    <p className="my-3"><strong>English Translation:</strong> {verseData.trans}</p>
                    <p className="my-3"><strong>Summary:</strong> {verseSummary}</p>
                </div>
            </div>
        </div>
    );
};

export default Shlok;







{/* import { useEffect, useState } from 'react';
import axios from 'axios';

const Shlok = ({ selectedChapter, selectedVerse, onClose }) => {
    const [verseData, setVerseData] = useState(null);

    useEffect(() => {
        if (selectedChapter !== null && selectedVerse !== null) {
            axios.get(`https://vedicscriptures.github.io/slok/${selectedChapter}/${selectedVerse}`)
                .then(response => {
                    const geeta = response.data;
                    setVerseData({
                        shlok: geeta.slok,
                        tej: geeta.tej.ht,
                        trans: geeta.siva.et
                    });
                }).catch(error => {
                    console.error('Error fetching verse data:', error);
                });
        }
    }, [selectedChapter, selectedVerse]);

    if (!verseData) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl bg-deepBlue text-white rounded-full w-8 h-8 flex justify-center items-center">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 font-serif text-saffron text-center">Shlok</h2>
                <div className="text-deepBlue">
                    <h3 className="text-xl mb-2 text-center">Chapter: {selectedChapter}, Verse: {selectedVerse}</h3>
                    <p className="my-3"><strong>Shlok:</strong> {verseData.shlok}</p>
                    <p className="my-3"><strong>Explanation:</strong> {verseData.tej}</p>
                    <p className="my-3"><strong>English Translation:</strong> {verseData.trans}</p>
                </div>
            </div>
        </div>
    );
};

export default Shlok; */}
