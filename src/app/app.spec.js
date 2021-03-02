import React from 'react';
import { create } from 'react-test-renderer';
import { App } from './app';

jest.mock('./home/home', () => ({
  Home: () => <div></div>
}));
jest.mock('./forbidden/forbidden', () => ({
  Forbidden: () => <div></div>
}));
jest.mock('./not-found/not-found', () => ({
  NotFound: () => <div></div>
}));
jest.mock('./not-match/not-match', () => ({
  NotMatch: () => <div></div>
}));

describe('src/app/app.js', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addListener: jest.fn() })
    });
  });
  it('should be `App`', () => {
    expect(create(<App />)).toBeTruthy();
  });
});
