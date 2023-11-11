import { TbMenu2 } from 'react-icons/tb';

import { ILogoMenuProps } from './LogoMenu.props';

import { IconBtn, Logo } from '@/components';

const LogoMenu: React.FC<ILogoMenuProps> = ({ staticData }) => {
  return (
    <div className="flex gap-4">
      <Logo staticData={staticData.logo} />

      <IconBtn
        icon={TbMenu2}
        onClick={() => {}}
        staticData={staticData.iconBtn}
      />
    </div>
  );
};

export default LogoMenu;
