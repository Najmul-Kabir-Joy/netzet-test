import Image from 'next/image';
import React, { useState } from 'react';

const SmallScreenNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="small-screen-nav md:hidden px-6 relative">
      <div className="flex items-center">
        {/* Left spacer - takes up same space as hamburger menu */}
        <div className="w-6 h-6"></div>

        <div className="flex-1 flex justify-center">
          <div className="logo relative w-[107px] h-11.5">
            <Image
              className="object-contain"
              src="/fametonic-logo.svg"
              alt="Fametonic logo"
              fill
              priority
            />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-menu z-[var(--z-dropdown)] relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex justify-center items-center">
            {isMenuOpen ? (
              <Image
                src="/icons/close-icon.svg"
                alt="Close menu"
                width="20"
                height="20"
              />
            ) : (
              <Image
                src="/icons/hamburger-icon.svg"
                alt="Menu"
                width="20"
                height="12"
              />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown Will go here*/}
    </div>
  );
};

export default SmallScreenNav;
