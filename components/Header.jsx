import Image from 'next/image';
import bhagwatImage from '../public/bhagwat.jpg';

const Header = () => (
    <header className="text-center my-8">
        <Image src={bhagwatImage} alt="Bhagwat Geeta" layout="responsive" className="mx-auto"/>
        <h1 className="font-serif text-4xl mt-4 text-saffron">Krishna</h1>
        <p className="mt-4 font-sans text-deepBlue">
            The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata.
        </p>
    </header>
);

export default Header;