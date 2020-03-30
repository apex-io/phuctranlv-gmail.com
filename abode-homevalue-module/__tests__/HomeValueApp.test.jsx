const React = require('react');
const $ = require('jquery');
const sinon = require('sinon');
const { mount } = require('enzyme');
const HomeValueApp = require('../client/components/HomeValueApp.jsx').default;


describe('Test the state of the component', () => {
  sinon.spy($, 'ajax');
  sinon.spy(HomeValueApp.prototype, 'componentDidMount');
  const wrapper = mount(<HomeValueApp />);
  const spyCall = $.ajax.getCall(0);

  it('The componentDidMount was called', () => {
    console.log('Test: The componentDidMount was called.');
    expect(HomeValueApp.prototype.componentDidMount).toHaveProperty('callCount', 1);
  });

  it('The initial ajax request was made', () => {
    console.log('Test: The initial ajax request was made.');
    expect(spyCall.args[0].url).toBe('/exampleHomeSummary/');
  });

  wrapper.unmount();
});

describe('Test the rendering of the component', () => {
  
});

describe('Test the handling of events', () => {

});
