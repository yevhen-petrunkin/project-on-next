import { Navbar } from '@/components';

const Header = ({ staticData }) => {
  return (
    <header>
      <Navbar staticData={staticData} />
    </header>
  );
};

export default Header;
