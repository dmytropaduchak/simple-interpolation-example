import React from 'react';
import { create } from 'react-test-renderer';
import { BilinearInterpolation } from './bilinear-interpolation';

describe('src/app/home/components/bilinear-interpolation/bilinear-interpolation.tsx', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addListener: jest.fn() })
    });
  });
  it('should be `BilinearInterpolation`', () => {
    expect(create(<BilinearInterpolation />)).toBeTruthy();
  });
});
