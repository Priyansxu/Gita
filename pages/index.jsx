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

    return (
        <div>
            <Header />
            <Adhyay onShlokClick={handleShlokClick} />
            <Shloks selectedChapter={selectedChapter} selectedShlok={selectedShlok} />
        </div>
    );
};

export default Home;
