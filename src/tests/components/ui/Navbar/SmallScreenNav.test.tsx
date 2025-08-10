import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileNav from '@/components/ui/Navbar/SmallScreenNav';

describe('MobileNav Component', () => {
  it('should render without crashing', () => {
    render(<MobileNav />);
    const mobileNav = document.querySelector('.small-screen-nav');
    expect(mobileNav).toBeInTheDocument();
  });

  it('should render the logo with correct attributes', () => {
    render(<MobileNav />);
    const logoImage = screen.getByAltText('Fametonic logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/fametonic-logo.svg');
  });

  it('should render hamburger menu button', () => {
    render(<MobileNav />);
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveClass('hamburger-menu');
  });

  it('should show hamburger icon when menu is closed', () => {
    render(<MobileNav />);
    const hamburgerIcon = screen.getByAltText('Menu');
    expect(hamburgerIcon).toBeInTheDocument();
    expect(hamburgerIcon).toHaveAttribute('src', '/icons/hamburger-icon.svg');
  });

  it('should show close icon when menu is open', () => {
    render(<MobileNav />);
    const menuButton = screen.getByLabelText('Toggle menu');

    fireEvent.click(menuButton);

    const closeIcon = screen.getByAltText('Close menu');
    expect(closeIcon).toBeInTheDocument();
    expect(closeIcon).toHaveAttribute('src', '/icons/close-icon.svg');
  });
});
