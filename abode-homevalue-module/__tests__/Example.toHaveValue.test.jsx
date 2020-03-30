import React from 'react';
import { mount, shallow } from 'enzyme';

function Fixture() {
  return (
    <div>
      <input id="checked" defaultValue="test1" />
      <input id="not" />
      <input id="tertiary" />
    </div>
  );
}


describe('<Fixture />', () => {
  it('a given wrapper is checked or not', () => {
    const wrapper = mount(<Fixture prop1="prop1" />);
    expect(wrapper.find('#checked').at(0)).toHaveValue('test1');
  });
});
