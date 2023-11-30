import headerData from '@/data/header.json';
import { Navbar } from '@/components';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 mx-auto w-[100vw]">
      <Navbar staticData={headerData.header.navbar} />
    </header>
  );
};

export default Header;
