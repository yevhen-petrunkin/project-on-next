export type LogoT = {
  link: string;
  src: string;
  alt: string;
  label: string;
};

export type NavMenuItemT = {
  id: string;
  title: string;
  path?: string;
  tag?: string;
};

export type IconBtnT = {
  btnLabel: string;
  iconLabel: string;
};

export type LogoMenuT = {
  logo: LogoT;
  iconBtn: IconBtnT;
};

export type UserMenuT = {
  account: IconBtnT;
  logOut: IconBtnT;
  signIn: IconBtnT;
  logIn: IconBtnT;
};

export type NavbarT = {
  logoMenu: LogoMenuT;
  navMenu: NavMenuItemT[];
  userMenu: UserMenuT;
};
