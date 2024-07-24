import { useState } from 'react';
import Head from 'next/head';
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
            <Head>
                <title>Bhagavad Gita</title>
                <meta name="description" content="Read and explore the verses of the Bhagavad Gita." />
            </Head>
            <div className="relative">
                <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
                <div className="relative z-20">
                    <Header />
                    <Adhyay onShlokClick={handleShlokClick} />
                </div>
            </div>
            <main className="flex-grow">
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