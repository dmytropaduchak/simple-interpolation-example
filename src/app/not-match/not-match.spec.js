import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { NotMatch } from './not-match';

describe('src/app/not-match/not-match.js', () => {
  it('should be `NotMatch`', () => {
    expect(create(<BrowserRouter><NotMatch /></BrowserRouter>)).toBeTruthy();
  });
});
