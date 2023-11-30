import cn from 'classnames';

import Image from 'next/image';

import { IHeroLayerProps } from './HeroLayer.props';

const HeroLayer: React.FC<IHeroLayerProps> = ({ heroLayer, extraStyles }) => {
  return (
    <li className={cn('hero__layer', { [extraStyles]: extraStyles })}>
      <Image
        src={heroLayer.smUrl}
        alt={heroLayer.alt}
        fill
        className="sm:hidden"
        aria-label={heroLayer.label}
      />

      <Image
        src={heroLayer.mdUrl}
        alt={heroLayer.alt}
        fill
        className="hidden mdOnly:block"
        aria-label={heroLayer.label}
      />

      <Image
        src={heroLayer.lgUrl}
        alt={heroLayer.alt}
        fill
        className="hidden lg:block"
        aria-label={heroLayer.label}
      />
    </li>
  );
};

export default HeroLayer;
