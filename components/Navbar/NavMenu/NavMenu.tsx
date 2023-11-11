import cn from 'classnames';
import Link from 'next/link';

import { NavMenuItemT } from '@/types';
import { INavMenuProps } from './NavMenu.props';

const NavMenu: React.FC<INavMenuProps> = ({ isVisible, staticData }) => {
  return (
    <ul
      className={cn('hidden gap-4 tracking-wider md:flex md:justify-center', {
        'md:visible': isVisible,
        'md:invisible': !isVisible,
      })}
    >
      {staticData.map((item: NavMenuItemT) => (
        <li key={item.id} className="p-2 ">
          {item.path ? (
            <Link className="nav-interaction" href={item?.path}>
              {item.title}
            </Link>
          ) : (
            <a className="nav-interaction" href={item?.tag}>
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
