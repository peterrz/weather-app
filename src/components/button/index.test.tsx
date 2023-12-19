import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button onClick={() => {}}>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Button onClick={() => {}}>Test Button</Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Test Button</Button>);

    fireEvent.click(screen.getByText('Test Button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
