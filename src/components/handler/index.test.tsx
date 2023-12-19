import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorFallback from './index';

describe('ErrorFallback component', () => {
  it('renders error message and "Try again" button', () => {
    const mockError = new Error('Test error message');
    const { getByText, getByRole } = render(
      <ErrorFallback error={mockError} />
    );

    // Check if the error message is rendered
    expect(getByText('Something went wrong:')).toBeInTheDocument();
    expect(getByText('Test error message')).toBeInTheDocument();

    // Check if the "Try again" button is rendered
    const tryAgainButton = getByRole('button', { name: 'Try again' });
    expect(tryAgainButton).toBeInTheDocument();
  });

  it('calls window.location.reload() when "Try again" button is clicked', () => {
    const mockError = new Error('Test error message');
    const { getByRole } = render(<ErrorFallback error={mockError} />);

    // Mock window.location.reload
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    // Click the "Try again" button
    const tryAgainButton = getByRole('button', { name: 'Try again' });
    fireEvent.click(tryAgainButton);

    // Check if window.location.reload() is called
    expect(reloadMock).toHaveBeenCalledTimes(1);
  });
});
