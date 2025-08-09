import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/components/ui/Navbar/Navbar';

describe('Navbar Component', () => {
  it('should render without crashing', () => {
    render(<Navbar />);
    const navbarSection = document.querySelector('section.navbar');
    expect(navbarSection).toBeInTheDocument();
  });

  it('should render with correct CSS classes', () => {
    render(<Navbar />);
    const navbarSection = document.querySelector('section.navbar');
    expect(navbarSection).toHaveClass('navbar', 'mt-4', 'md:mt-[35px]');
  });

  it('should render both desktop and mobile navigation components', () => {
    render(<Navbar />);

    const desktopNav = document.querySelector('.large-nav');
    const mobileNav = document.querySelector('.small-screen-nav');

    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });
});
