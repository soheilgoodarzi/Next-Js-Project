import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white text-center">
    <nav className='mt-2'>
      <ul className='flex justify-center space-x-4'>
        <li>
          <Link href={`/`} className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href={`/ContactUs`} className="hover:underline"> Contact us</Link>
        </li>
      </ul>
    </nav>
    </header>
      );
      
};
export default Header;
