import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexHGrow3 from './FlexHGrow3';

describe('<FlexHGrow3 />', () => {
  test('it should mount', () => {
    render(<FlexHGrow3 ><div>Hello</div></FlexHGrow3>);

    const flexHGrow3 = screen.getByTestId('FlexHGrow3');

    expect(flexHGrow3).toBeInTheDocument();
  });
});