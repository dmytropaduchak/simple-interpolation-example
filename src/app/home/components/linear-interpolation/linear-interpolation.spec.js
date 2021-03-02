import React from 'react';
import { create } from 'react-test-renderer';
import { LinearInterpolation } from './linear-interpolation';

describe('src/app/home/components/linear-interpolation/linear-interpolation.tsx', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addListener: jest.fn() })
    });
  });
  it('should be `LinearInterpolation`', () => {
    expect(create(<LinearInterpolation />)).toBeTruthy();
  });
});
