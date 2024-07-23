import { useState } from 'react';
import Header from '../components/Header';
import Adhyay from '../components/Adhyay';
import Shlok from '../components/Shlok';
import Footer from '../components/Footer';

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
        <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Adhyay onShlokClick={handleShlokClick} />
                {selectedChapter !== null && selectedVerse !== null && (
                <Shlok 
                        selectedChapter={selectedChapter} 
                        selectedVerse={selectedVerse} 
                        onClose={handleClose}
                        />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Home;