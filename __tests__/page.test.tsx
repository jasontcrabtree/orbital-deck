// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import Page from '../src/app/page';

// describe('Page', () => {
//   it('renders a heading', () => {
//     render(<Page />);

//     const heading = screen.getByRole('heading', { level: 1 });
//     expect(heading).toBeInTheDocument();
//   });
// });

// import { expect, test } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import Page from '../src/app/page';

// test('Page', () => {
//   render(<Page />);

//   expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';
import { MockClerkProvider } from './mocks/MockClerkProvider';

describe('ExampleComponent', () => {
  it('renders without crashing', () => {
    render(
      <MockClerkProvider value={{ /* mock values here */ }}>
        <Page />
      </MockClerkProvider>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});