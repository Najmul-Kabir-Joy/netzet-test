import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PromotionBar from '@/components/ui/PromotionBar/PromotionBar';

describe('PromotionBar', () => {
  it('renders the promotion message', () => {
    render(<PromotionBar />);

    expect(screen.getByText(/FRESH BEGINNINGS SALE/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Extra 25% OFF, Limited Spots/i)
    ).toBeInTheDocument();
  });
});
