import Image from 'next/image';
import Link from 'next/link';

import { ILogoProps } from './Logo.props';

const Logo: React.FC<ILogoProps> = ({ staticData }) => {
  return (
    <Link
      href={staticData.link}
      className="fx-center h-10 w-10 overflow-hidden rounded-full border-2 border-white"
      aria-label={staticData.label}
    >
      <Image src={staticData.src} alt={staticData.alt} width={22} height={22} />
    </Link>
  );
};

export default Logo;
