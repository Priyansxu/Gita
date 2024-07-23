import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-deepBlue via-cream to-deepBlue text-cream py-4 rounded-t-lg">
      <div className="container mx-auto text-center">
        <p className="text-lg font-alternative">
          Made with love by{' '}
          <Link href="https://www.instagram.com/pusxoo">
            <a className="font-bold text-saffron hover:text-lightSaffron transition-colors">
              Priyanshu 🪷
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;