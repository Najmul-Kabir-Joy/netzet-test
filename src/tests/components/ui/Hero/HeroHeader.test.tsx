import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroHeader from '@/components/ui/Hero/HeroHeader';

describe('HeroHeader', () => {
  it('renders the main header texts', () => {
    render(<HeroHeader />);
    expect(
      screen.getByText('Want to Turn Social Media Into a Profitable Career?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Discover your way to success with Fametonic:')
    ).toBeInTheDocument();
  });
});
