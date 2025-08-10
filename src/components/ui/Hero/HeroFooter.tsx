import React from 'react';
import CtaButtonWithText from './CtaButtonWithText';

const HeroFooter: React.FC = () => {
  return (
    <div className="hero-footer flex flex-col-reverse md:block">
      <div className="fixed md:relative bottom-0 left-0 z-[var(--z-docked)] md:z-[var(--z-base)] w-full md:w-[313px] px-5 md:px-0 py-4 md:py-0 bg-black text-center">
        <CtaButtonWithText text={'1-minute quiz for personalized Insights'} />
      </div>
      <div className="flex flex-col gap-3 mt-5.5 md:mt-7.5 px-8.5 md:px-0 text-center md:text-left font-medium text-text-secondary">
        <p className="text-xs">
          By clicking &quot;Get Started&quot;, you agree with Terms and
          Conditions, Privacy Policy, Subscription Terms
        </p>

        <p className="text-[10px]">Fametonic 2025 ©All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default HeroFooter;
