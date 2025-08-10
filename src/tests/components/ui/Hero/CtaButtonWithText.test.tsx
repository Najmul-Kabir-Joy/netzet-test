import React from 'react';
import { render, screen } from '@testing-library/react';
import CtaButtonWithText from '@/components/ui/Hero/CtaButtonWithText';

describe('CtaButtonWithText', () => {
  it('renders CTA button and text', () => {
    render(<CtaButtonWithText text="Sample Text" />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByTestId('with-text')).toHaveTextContent('Sample Text');
  });
});
