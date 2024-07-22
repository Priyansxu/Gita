import { useState } from 'react';
import Header from '../components/Header';
import Adhyay from '../components/Adhyay';
import Shloks from '../components/Shlok';

const Home = () => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedVerse, setSelectedVerse] = useState(null);

    const handleShlokClick = (chapter, verse) => {
        setSelectedChapter(chapter);
        setSelectedVerse(verse);
    };

    const handleClose = () => {
        setSelectedChapter(null);
        setSelectedVerse(null);
    };

    return (
        <div className="relative">
            <Header />
            <Adhyay onShlokClick={handleShlokClick} />
            {selectedChapter !== null && selectedVerse !== null && (
                <Shlok 
                    selectedChapter={selectedChapter} 
                    selectedVerse={selectedVerse} 
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Home;
