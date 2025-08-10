import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroFeatures from '@/components/ui/Hero/HeroFeatures';

describe('HeroFeatures', () => {
  it('renders the main container with correct class', () => {
    const { container } = render(<HeroFeatures />);
    const mainDiv = container.querySelector('.hero-features');
    expect(mainDiv).not.toBeNull();
    expect(mainDiv?.className).toContain('hero-features');
  });

  it('renders the header text', () => {
    render(<HeroFeatures />);
    expect(
      screen.getByText('Want to Turn Social Media Into a Profitable Career?')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Discover your way to success with Fametonic:')
    ).toBeInTheDocument();
  });

  it('renders all feature texts', () => {
    render(<HeroFeatures />);
    expect(
      screen.getByText(
        'Start growing your influence right away—no waiting required!'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Create viral TikToks and Reels step by step with easy-to-follow lessons'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Use a Personal AI Worker to boost your content creation process'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Learn from expert-led courses designed for aspiring influencers'
      )
    ).toBeInTheDocument();
  });

  it('renders the CTA button and legal text in the footer', () => {
    render(<HeroFeatures />);
    expect(
      screen.getByRole('button', { name: /get started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/1-minute quiz for personalized Insights/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /you agree with Terms and\s*Conditions, Privacy Policy, Subscription Terms/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Fametonic 2025 ©All Rights Reserved./i)
    ).toBeInTheDocument();
  });
});
