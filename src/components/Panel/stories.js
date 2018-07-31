/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Panel from '.';

const breakpoints = {
  mobile: 0,
  tablet: 737,
  desktop: 1025,
  max: 1200,
};

storiesOf('Panel', module)
  .add('max width of 1200', () => (
    <ThemeProvider theme={{ breakpoints }}>
      <Panel maxWidth={1200}>
        <p>hello</p>
        <p>world</p>
      </Panel>
    </ThemeProvider>
  ))
  .add('max width of 1200, background color blue', () => (
    <ThemeProvider theme={{ breakpoints }}>
      <Panel maxWidth={1200} backgroundColor="lightblue">
        <p>hello</p>
        <p>world</p>
      </Panel>
    </ThemeProvider>
  ))
  .add('max width of 1200, background color black, font color white', () => (
    <ThemeProvider theme={{ breakpoints }}>
      <Panel maxWidth={1200} backgroundColor="black" color="white">
        <p>hello</p>
        <p>world</p>
      </Panel>
    </ThemeProvider>
  ))
  .add('max width of 1200, background image', () => (
    <ThemeProvider theme={{ breakpoints }}>
      <Panel maxWidth={1200} backgroundImage>
        <img src="https://via.placeholder.com/1200x480" alt="placeholder" />
        <div className="content-container">
          <p>hello</p>
          <p>world</p>
        </div>
      </Panel>
    </ThemeProvider>
  ));
