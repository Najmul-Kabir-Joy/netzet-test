import React from 'react';
import LargeScreenNav from './LargeScreenNav';
import SmallScreenNav from './SmallScreenNav';

const Navbar: React.FC = () => {
  return (
    <section className="navbar relative z-[var(--z-docked)] mt-4 md:mt-[35px]">
      {/* Desktop Navigation above md devices */}
      <LargeScreenNav />
      {/* Mobile Navigation md devices*/}
      <SmallScreenNav />
    </section>
  );
};

export default Navbar;
