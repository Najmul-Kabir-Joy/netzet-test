import React from 'react';
import { render } from '@testing-library/react';
import HeroFeaturesList from '@/components/ui/Hero/HeroFeaturesList';

describe('HeroFeaturesList', () => {
  it('renders all feature items', () => {
    const { container } = render(<HeroFeaturesList />);
    const featureItems = container.querySelectorAll('.feature-item');
    expect(featureItems.length).toBeGreaterThan(0);
    featureItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
