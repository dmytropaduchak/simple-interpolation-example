import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import { NotFound } from './not-found';

describe('src/app/not-found/not-found.js', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addListener: jest.fn() })
    });    
  });
  it('should be `NotFound`', () => {
    expect(create(<BrowserRouter><NotFound /></BrowserRouter>)).toBeTruthy();
  });
});
