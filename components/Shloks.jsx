import { useEffect, useState } from 'react';
import axios from 'axios';

const Shloks = ({ selectedChapter, selectedShlok }) => {
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
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4 font-serif text-gold">Shlok</h2>
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
        </section>
    );
};

export default Shloks;