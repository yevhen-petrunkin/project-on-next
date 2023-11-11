import { TbLogin, TbLogout } from 'react-icons/tb';
import { BsFillPersonPlusFill, BsFillPersonFill } from 'react-icons/bs';

import { IUserMenuProps } from './UserMenu.props';

import { IconBtn } from '@/components';

const UserMenu: React.FC<IUserMenuProps> = ({ staticData }) => {
  const user = true;

  return (
    <>
      {user ? (
        <div className="fx-start gap-4">
          <IconBtn
            icon={BsFillPersonFill}
            onClick={() => {}}
            staticData={staticData.account}
          />

          <IconBtn
            icon={TbLogout}
            onClick={() => {}}
            staticData={staticData.logOut}
          />
        </div>
      ) : (
        <div className="fx-start gap-4">
          <IconBtn
            icon={BsFillPersonPlusFill}
            onClick={() => {}}
            staticData={staticData.signIn}
          />
          <IconBtn
            icon={TbLogin}
            onClick={() => {}}
            staticData={staticData.logIn}
          />
        </div>
      )}
    </>
  );
};

export default UserMenu;
