import { useState } from 'react';
import Header from '../components/Header';
import Adhyay from '../components/Adhyay';
import Shloks from '../components/Shloks';

const Home = () => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedVerse, setSelectedVerse] = useState(null);

    const handleVerseClick = (chapter, verse) => {
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
            <ChapterList onVerseClick={handleVerseClick} />
            {selectedChapter !== null && selectedVerse !== null && (
                <VerseDetail 
                    selectedChapter={selectedChapter} 
                    selectedVerse={selectedVerse} 
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Home;