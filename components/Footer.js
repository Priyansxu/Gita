import Link from 'next/link';

const Footer = () => {
  return (
   <div className="px-4">
    <footer className="bg-deepBlue text-cream py-4 rounded-t-lg">
      <div className="container mx-auto text-center">
        <p className="text-sm font-serif">
          Made with love by{' '}
          <Link href="https://www.instagram.com/pusxoo">
            <a className="font-serif text-saffron hover:text-lightSaffron transition-colors underline decoration-gold">
              <strong>Priyanshu 🪷</strong>
            </a>
           </Link>
          </p>
         </div>
        </footer>
       </div>
  );
};

export default Footer;