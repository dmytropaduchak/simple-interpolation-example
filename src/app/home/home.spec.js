import React from 'react';
import { create } from 'react-test-renderer';
import { Home } from './home';

jest.mock('antd/lib/tabs', () => ({
  __esModule: true,
  default: () => <div></div>,
  TabPane: () => <div></div>,
}));
jest.mock('./components/linear-interpolation/linear-interpolation', () => ({
  LinearInterpolation: () => <div></div>
}));
jest.mock('./components/bilinear-interpolation/bilinear-interpolation', () => ({
  BilinearInterpolation: () => <div></div>
}));

describe('src/app/home/home.js', () => {
  it('should be `Home`', () => {
    expect(create(<Home />)).toBeTruthy();
  });
});
