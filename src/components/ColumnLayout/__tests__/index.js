/* eslint-disable function-paren-newline */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColumnLayout from '../index';

describe('ColumnLayout', () => {
  it('renders correctly for 2 columns', () => {
    const tree = toJson(shallow(
      <ColumnLayout>
        <p>hello</p>
        <p>world</p>
      </ColumnLayout>,
    ));
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex-basis', '50%', {
      modifier: '> *',
    });
  });

  it('renders correctly for 4 columns', () => {
    const tree = toJson(shallow(
      <ColumnLayout>
        <p>hello</p>
        <p>world</p>
        <p>1</p>
        <p>2</p>
      </ColumnLayout>,
    ));
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex-basis', '25%', {
      modifier: '> *',
    });
  });
});
