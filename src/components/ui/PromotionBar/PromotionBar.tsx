import React from 'react';

const PromotionBar: React.FC = () => {
  return (
    <section
      className="promotion-bar flex w-full items-center justify-center p-5 gradient-promotion-bar lg:px-auto lg:py-2.5"
      role="banner"
      aria-label="Promotional offer"
    >
      <p className="text-center text-base font-primary font-extrabold text-text-primary lg:flex lg:h-[26px] lg:items-center lg:justify-center lg:text-[1.375rem]">
        <span className="text-secondary-light">🚀 FRESH BEGINNINGS SALE:</span>
        <span>&nbsp;</span>
        <span className="font-semibold">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </p>
    </section>
  );
};

export default PromotionBar;
