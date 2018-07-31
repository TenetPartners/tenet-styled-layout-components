/* eslint-disable function-paren-newline */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Panel from '../Panel';

const breakpoints = {
  mobile: 0,
  tablet: 737,
  desktop: 1025,
  max: 1200,
};

describe('Panel', () => {
  it('renders correctly for max width', () => {
    const tree = renderer.create(
      <ThemeProvider theme={{ breakpoints }}>
        <Panel maxWidth={1200}>
          <p>hello</p>
          <p>world</p>
        </Panel>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('padding-left', 'calc(50vw - 37.5em)', {
      media: '(min-width:75em)',
    });
  });

  it('renders correctly for background color', () => {
    const tree = renderer.create(
      <ThemeProvider theme={{ breakpoints }}>
        <Panel backgroundColor="black">
          <p>hello</p>
          <p>world</p>
        </Panel>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background-color', 'black');
  });

  it('renders correctly for color', () => {
    const tree = renderer.create(
      <Panel color="blue">
        <p>hello</p>
        <p>world</p>
      </Panel>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'blue');
  });

  it('renders correctly for background image', () => {
    const tree = renderer.create(
      <ThemeProvider theme={{ breakpoints }}>
        <Panel maxWidth={1200} backgroundImage>
          <img src="https://via.placeholder.com/1200x480" alt="placeholder" />
          <div className="content-container">
            <p>hello</p>
            <p>world</p>
          </div>
        </Panel>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'grid');
    expect(tree).toHaveStyleRule('grid-column', '1 / -1', {
      modifier: '> img',
    });
    expect(tree).toHaveStyleRule('grid-row', '1 / -1', {
      modifier: '> img',
    });
    expect(tree).toHaveStyleRule('width', '100vw', {
      modifier: '> img',
    });
    expect(tree).toHaveStyleRule('max-width', 'none', {
      modifier: '> img',
    });
    expect(tree).toHaveStyleRule('margin-left', 'calc((50vw - 37.5em) * -1)', {
      modifier: '> img',
      media: '(min-width:75em)',
    });
    expect(tree).toHaveStyleRule('margin-right', 'calc((50vw - 37.5em) * -1)', {
      modifier: '> img',
      media: '(min-width:75em)',
    });
    expect(tree).toHaveStyleRule('grid-column', '1 / -1', {
      modifier: '> .content-container',
    });
    expect(tree).toHaveStyleRule('grid-row', '1 / -1', {
      modifier: '> .content-container',
    });
  });
});
