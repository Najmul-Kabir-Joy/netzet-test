import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DesktopNav from '@/components/ui/Navbar/LargeScreenNav';
import { NAV_ITEMS } from '@/components/ui/Navbar/navbar.constants';

describe('DesktopNav Component', () => {
  it('should render without crashing', () => {
    render(<DesktopNav />);
    const desktopNav = document.querySelector('.large-nav');
    expect(desktopNav).toBeInTheDocument();
  });

  it('should render the Fametonic logo', () => {
    render(<DesktopNav />);
    const logo = screen.getByAltText('Fametonic logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/fametonic-logo.svg');
  });

  it('should render all navigation items from NAV_ITEMS', () => {
    render(<DesktopNav />);

    NAV_ITEMS.forEach((item) => {
      const navLink = screen.getByText(item.label);
      expect(navLink).toBeInTheDocument();
      expect(navLink.closest('a')).toHaveAttribute('href', item.href);
    });
  });

  it('should render correct number of navigation items', () => {
    render(<DesktopNav />);
    const navItems = document.querySelectorAll('li');
    expect(navItems).toHaveLength(NAV_ITEMS.length);
  });

  it('should render navigation items as links', () => {
    render(<DesktopNav />);

    NAV_ITEMS.forEach((item) => {
      const link = screen.getByRole('link', { name: item.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
    });
  });
});
