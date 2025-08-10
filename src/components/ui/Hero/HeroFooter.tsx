import React from 'react';
import CtaButtonWithText from './CtaButtonWithText';

const HeroFooter: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:block hero-footer">
      <div className="w-full fixed md:relative bottom-0 left-0 z-10 md:z-0 px-5 md:px-0 py-4 md:py-0 bg-black text-center md:w-[313px]">
        <CtaButtonWithText text={'1-minute quiz for personalized Insights'} />
      </div>
      <div className="flex flex-col gap-3 px-8.5 mt-5.5 text-center font-medium text-text-secondary md:mt-7.5 md:px-0 md:text-left">
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
