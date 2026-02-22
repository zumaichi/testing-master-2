import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as ReactPromiseTracker from 'react-promise-tracker';

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));

describe('SpinnerComponent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('deberia aparecer modal al tener una promesa en progreso', () => {
    //arrange
    (ReactPromiseTracker.usePromiseTracker as any).mockReturnValue({
      promiseInProgress: true,
    });
    //act
    render(<SpinnerComponent />);
    //assert
    const modal = screen.getByRole('presentation');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('MuiModal-root');
  });
});
