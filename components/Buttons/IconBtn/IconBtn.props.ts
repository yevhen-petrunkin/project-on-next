import { IconType } from 'react-icons/lib';
import { IconBtnT } from '@/types';

export interface IIconBtnProps {
  icon: IconType;
  variant?: 'head' | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  staticData: IconBtnT;
  extraStyles?: string | undefined;
}
