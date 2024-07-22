import { useState } from 'react';
import Header from '../components/Header';
import Adhyay from '../components/Adhyay';
import Shloks from '../components/Shloks';

const Home = () => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedShlok, setSelectedShlok] = useState(null);

    const handleShlokClick = (chapter, shlok) => {
        setSelectedChapter(chapter);
        setSelectedShlok(shlok);
    };

    const handleClose = () => {
        setSelectedChapter(null);
        setSelectedShlok(null);
    };

    return (
        <div className="relative">
            <Header />
            <Adhyay onShlokClick={handleShlokClick} />
            {selectedChapter !== null && selectedShlok !== null && (
                <Shloks 
                    selectedChapter={selectedChapter} 
                    selectedShlok={selectedShlok} 
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Home;