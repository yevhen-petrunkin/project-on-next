'use client';

import { useState, useCallback } from 'react';

import { INavbarProps } from './Navbar.props';

import { LogoMenu, NavMenu, UserMenu } from '@/components';

const Navbar: React.FC<INavbarProps> = ({ staticData }) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleMouseOver = useCallback(
    () => setVisibility(true),
    [setVisibility],
  );

  const handleMouseLeave = useCallback(
    () => setVisibility(false),
    [setVisibility],
  );

  return (
    <nav
      className="2xl:max-w-[1600px] fx-between flex w-full bg-primary-700/80 px-4 py-3 text-white transition-colors duration-500 ease-out sm:px-6 md:bg-transparent md:px-8 md:py-4 md:hover:bg-primary-700/80"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <LogoMenu staticData={staticData.logoMenu} />

      <NavMenu isVisible={visibility} staticData={staticData.navMenu} />

      <UserMenu staticData={staticData.userMenu} />
    </nav>
  );
};

export default Navbar;
