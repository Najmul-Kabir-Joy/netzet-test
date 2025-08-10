import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/ui/Hero/Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByAltText('Hero Image')).toBeInTheDocument();
  });
});
