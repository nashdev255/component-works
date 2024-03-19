/**
* @jest-environment jsdom　　　　
*/
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SolidButton from './SolidButton';

describe('Rendering', () => {
  it('Should be render Submit', () => {
    render(<SolidButton />);
    expect(screen.getByText('Submit')).toBeInTheDocument()
  });
});
