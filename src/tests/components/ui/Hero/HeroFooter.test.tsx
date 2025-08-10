import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroFooter from '@/components/ui/Hero/HeroFooter';

describe('HeroFooter', () => {
  it('renders the CTA button and footer text', () => {
    render(<HeroFooter />);
    expect(
      screen.getByText(/1-minute quiz for personalized Insights/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Fametonic 2025 ©All Rights Reserved./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Terms and\s*Conditions, Privacy Policy, Subscription Terms/i
      )
    ).toBeInTheDocument();
  });
});
