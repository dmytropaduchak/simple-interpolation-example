import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import { Forbidden } from './forbidden';

describe('src/app/forbidden/forbidden.js', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addListener: jest.fn() })
    });    
  });
  it('should be `Forbidden`', () => {
    expect(create(<BrowserRouter><Forbidden /></BrowserRouter>)).toBeTruthy();
  });
});
