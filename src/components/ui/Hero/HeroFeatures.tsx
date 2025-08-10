import React from 'react';
import HeroHeader from './HeroHeader';
import HeroFeaturesList from './HeroFeaturesList';
import HeroFooter from './HeroFooter';

/**
 * HeroFeatures component that displays the main value proposition section
 * with headline, feature list, CTA button, and legal disclaimers.
 */
const HeroFeatures: React.FC = () => {
  return (
    <div className="w-full px-5 pb-28 md:max-w-[516px] md:px-0 md:pb-0 hero-features">
      <HeroHeader />
      <HeroFeaturesList />
      <HeroFooter />
    </div>
  );
};

export default HeroFeatures;
