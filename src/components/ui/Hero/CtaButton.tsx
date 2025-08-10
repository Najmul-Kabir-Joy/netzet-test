import Image from 'next/image';
import React from 'react';

const CtaButton: React.FC = () => {
  return (
    <button className="cta-button flex flex-row justify-center items-center text-center align-middle gap-2.5 mt-0 md:mt-7.5 px-10 py-2 bg-primary rounded-[10px] cta-button-shadow">
      <p className="text-xl font-bold uppercase text-text-primary">
        Get Started
      </p>
      <span>
        <Image
          src="/icons/chevron-right.svg"
          alt="chevron-right"
          width={11}
          height={6}
        />
      </span>
    </button>
  );
};

export default CtaButton;
