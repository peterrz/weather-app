import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Clock } from './clock';

jest.useFakeTimers();

describe('Clock component', () => {
  it('renders the current time in the specified timezone', async () => {
    const timezone = 'America/New_York';
    render(<Clock timezone={timezone} />);

    // Wait for the initial rendering with the current time
    await waitFor(() => {
      const formattedTime = new Date().toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      expect(screen.getByText(formattedTime)).toBeInTheDocument();
    });

    // Advance time by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check if the time is updated after the interval
    await waitFor(() => {
      const newFormattedTime = new Date().toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      expect(screen.getByText(newFormattedTime)).toBeInTheDocument();
    });
  });
});
