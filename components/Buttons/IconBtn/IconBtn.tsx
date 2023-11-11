'use client';

import cn from 'classnames';

import { IIconBtnProps } from './IconBtn.props';

const IconBtn: React.FC<IIconBtnProps> = ({
  icon: Icon,
  variant = 'head',
  type = 'button',
  onClick,
  staticData,
  extraStyles,
}) => {
  return (
    <button
      type={type}
      className={cn('fx-center nav-interaction overflow-hidden', {
        'text-current border-current h-10 w-10 rounded-full border-2 bg-transparent':
          variant.toLowerCase() === 'head',
        extraStyles: extraStyles,
      })}
      onClick={onClick}
      aria-label={staticData.btnLabel}
    >
      <Icon
        className={cn({
          'fill-current h-[22px] w-[22px]': variant.toLowerCase() === 'head',
        })}
        aria-label={staticData.iconLabel}
      />
    </button>
  );
};

export default IconBtn;
