import Image from 'next/image';
import bhagwatImage from '../public/bhagwat.jpg';

const Header = () => (
    <header className="text-center my-8 px-4">
        <Image src={bhagwatImage} alt="Bhagavad Gita" layout="responsive" className="mx-auto rounded-lg shadow-lg"/>
        <h1 className="font-serif text-5xl mt-4 text-saffron px-4">Bhagavad Gita</h1>
        <p className="mt-4 px-4 font-sans text-deepBlue text-lg italic">
            "In the heart of the battlefield, amidst chaos and strife, lies the timeless wisdom that guides the soul."
        </p>
    </header>
);

export default Header;