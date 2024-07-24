import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-deepBlue text-cream py-4 rounded-t-lg">
      <div className="text-center px-4">
        <p className="text-sm font-serif">
          Made with love by{' '}
          <Link href="https://www.instagram.com/pusxoo">
            <a className="font-serif text-saffron hover:text-lightSaffron transition-colors">
              <strong>Priyanshu 🪷</strong>
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;