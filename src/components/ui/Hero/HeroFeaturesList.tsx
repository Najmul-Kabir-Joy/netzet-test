import React from 'react';
import { FEATURE_TEXTS } from './heroFeature.constants';
import Image from 'next/image';

const HeroFeaturesList: React.FC = () => {
  return (
    <div className="flex flex-col gap-[13px] mt-4 features-list">
      {FEATURE_TEXTS.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-row items-center gap-2.5 text-text-primary feature-item"
        >
          <span>
            <Image
              src="/images/stars.png"
              alt="Feature Image"
              width={22}
              height={22}
            />
          </span>
          <p className="text-base font-medium leading-5.5 md:font-semibold">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroFeaturesList;
