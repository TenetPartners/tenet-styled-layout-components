/* eslint-disable function-paren-newline */
import React from 'react';
import renderer from 'react-test-renderer';
import ColumnLayout from '../index';

describe('ColumnLayout', () => {
  it('renders correctly for 2 columns', () => {
    const tree = renderer.create(
      <ColumnLayout>
        <p>hello</p>
        <p>world</p>
      </ColumnLayout>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex-basis', '50%', {
      modifier: '> *',
    });
  });

  it('renders correctly for 4 columns', () => {
    const tree = renderer.create(
      <ColumnLayout>
        <p>hello</p>
        <p>world</p>
        <p>1</p>
        <p>2</p>
      </ColumnLayout>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex-basis', '25%', {
      modifier: '> *',
    });
  });
});
