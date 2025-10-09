import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexVGrow1 from './FlexVGrow1';

describe('<FlexVGrow1 />', () => {
  test('it should mount', () => {
    render(<FlexVGrow1 ><div>Hello</div></FlexVGrow1>);

    const flexVGrow1 = screen.getByTestId('FlexVGrow1');

    expect(flexVGrow1).toBeInTheDocument();
  });
});