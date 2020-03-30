import React from 'react';
import { shallow } from 'enzyme';

describe('describe inner 1', () => {
  console.log('describe inner 1');
  test('props is actually passed into componenet', () => {
    console.log('test for describe inner 1');
    expect(true).toEqual(true);
  });
});
