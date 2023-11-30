'use client';
import { useEffect } from 'react';

import { russoOne } from '@/fonts';
import { useRain } from '@/hooks';
import heroData from '@/data/hero.json';

import { HeroLayer } from '@/components';

const Hero = () => {
  const title = heroData.hero.title;
  const layers = heroData.hero.layers;

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`,
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rainFunction = useRain();

  useEffect(() => {
    rainFunction();
  }, [rainFunction]);

  return (
    <section className="hero overflow-hidden border-b-8 border-b-white/40">
      <div className="hero__layers relative mx-auto h-[100vh] w-[100vw] overflow-hidden 2xl:max-w-[1600px]">
        <div className="hero__heading fx-center absolute inset-0 z-30 sm:justify-start sm:pl-[2rem] md:pl-[4rem] lg:pl-[6rem] xl:pl-[8rem] 2xl:pl-[10rem]">
          <h1
            className={`uppercase tracking-wide ${russoOne.className} txt-shadow-2`}
          >
            {title.upper}
            <span className="block">{title.lower}</span>
          </h1>
        </div>

        <ul className="h-[100vh] w-[100vw]">
          {layers &&
            layers.map(layer => (
              <HeroLayer
                key={layer.heroLayer.id}
                heroLayer={layer.heroLayer}
                extraStyles={layer.extraStyles}
              />
            ))}
        </ul>

        <div className="hero__layer ">
          <canvas className="rain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
