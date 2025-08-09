import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { NAV_ITEMS } from './navbar.constants';

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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 z-40 w-64 mt-2 mr-6">
          <div className="bg-black bg-opacity-95 backdrop-blur-md rounded-lg shadow-lg border border-gray-800">
            <nav className="p-4 navigation">
              <ul className="flex flex-col gap-2 font-primary font-semibold text-lg text-text-muted navigation-items">
                {NAV_ITEMS.map((item) => (
                  <li className="navigation-item" key={item.key}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 rounded-md hover:text-text-primary hover:bg-gray-800"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallScreenNav;
