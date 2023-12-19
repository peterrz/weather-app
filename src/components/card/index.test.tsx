import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';

describe('Card component', () => {
  it('renders without crashing', () => {
    render(<Card wrap={'nowrap'}>Test Content</Card>);
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Card wrap={'nowrap'}>Test Content</Card>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies styles based on wrap prop', () => {
    const { container, rerender } = render(
      <Card wrap={'nowrap'}>Test Content</Card>
    );

    // Check default styles (wrap is false)
    expect(container.firstChild).toHaveStyle('flex-wrap: nowrap');

    // Rerender with wrap true
    rerender(<Card wrap={'wrap'}>Test Content</Card>);
    expect(container.firstChild).toHaveStyle('flex-wrap: wrap');
  });
});
