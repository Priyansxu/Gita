import Image from 'next/image';
import headerImage from '../public/header.jpg';

const Header = () => (
    <header className="text-center my-8 px-4">
        <Image src={headerImage} alt="Bhagavad Gita" layout="responsive" className="mx-auto rounded-lg shadow-lg"/>
        <h1 className="font-serif text-4xl mt-4 text-saffron px-4">Bhagavad Gita</h1>
        <p className="mt-4 px-4 font-sans text-deepBlue text-lg italic">
            "In the midst of the battle, Krishna imparts timeless wisdom to guide the soul."
        </p>
    </header>
);

export default Header;
