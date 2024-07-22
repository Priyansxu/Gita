import { useEffect, useState } from 'react';
import axios from 'axios';

const Shloks = ({ selectedChapter, selectedVerse, onClose }) => {
    const [verseData, setVerseData] = useState(null);

    useEffect(() => {
        if (selectedChapter !== null && selectedVerse !== null) {
            axios.get(`https://vedicscriptures.github.io/slok/${selectedChapter}/${selectedVerse}`)
                .then(response => {
                    const geeta = response.data;
                    setVerseData({
                        shlok: geeta.slok,
                        tej: geeta.tej.ht,
                        trans: geeta.siva.et,
                        summary: {
                            en: geeta.summary.en,
                            hi: geeta.summary.hi
                        }
                    });
                }).catch(error => {
                    console.error('Error fetching verse data:', error);
                });
        }
    }, [selectedChapter, selectedVerse]);

    if (!verseData) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl">&times;</button>
                <h2 className="text-2xl font-bold mb-4 font-serif text-gold">Shlok</h2>
                <div className="text-deepBlue">
                    <h3 className="text-xl mb-2">Chapter: {selectedChapter}, Verse: {selectedVerse}</h3>
                    <p><strong>Shlok:</strong> {verseData.shlok}</p>
                    <p><strong>Explanation:</strong> {verseData.tej}</p>
                    <p><strong>English Translation:</strong> {verseData.trans}</p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Summary:</h4>
                        <p><strong>English:</strong> {verseData.summary.en}</p>
                        <p><strong>Hindi:</strong> {verseData.summary.hi}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shloks;