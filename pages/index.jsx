import Adhyay from '../components/Adhyay';
import Shlok from '../components/Shlok';
import { useState } from 'react';

const Home = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedShlok, setSelectedShlok] = useState(null);

  const handleShlokClick = (chapter, shlok) => {
    setSelectedChapter(chapter);
    setSelectedShlok(shlok);
  };

  return (
    <div className="bg-background min-h-screen py-8 px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-primary">Krishna</h1>
        <p className="text-center text-lg mt-2">The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata.</p>
      </header>
      <main>
        <Adhyay onShlokClick={handleShlokClick} />
        <Shlok selectedChapter={selectedChapter} selectedShlok={selectedShlok} />
      </main>
    </div>
  );
};

export default Home;