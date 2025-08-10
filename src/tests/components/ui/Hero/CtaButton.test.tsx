import React from 'react';
import { render, screen } from '@testing-library/react';
import CtaButton from '@/components/ui/Hero/CtaButton';

describe('CtaButton', () => {
  it('renders the button', () => {
    render(<CtaButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(<CtaButton />);
    expect(screen.getByText(/get started/i)).toBeInTheDocument();
  });

  it('renders the chevron image', () => {
    render(<CtaButton />);
    const img = screen.getByAltText('chevron-right');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/icons/chevron-right.svg');
  });
});
