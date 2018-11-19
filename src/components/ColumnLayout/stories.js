/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ColumnLayout from '.';

storiesOf('ColumnLayout', module)
  .add('with 2 columns', () => (
    <ColumnLayout>
      <p>hello</p>
      <p>world</p>
    </ColumnLayout>
  ))
  .add('with 3 columns', () => (
    <ColumnLayout>
      <p>hello</p>
      <p>world</p>
      <p>3rd column</p>
    </ColumnLayout>
  ))
  .add('with 2 videos', () => (
    <ColumnLayout>
      <video controls="" poster="//d166gs6ce8o9t3.cloudfront.net/Tenet_Corp.jpg">
        <source src="//d166gs6ce8o9t3.cloudfront.net/Tenet_Corp.mp4" type="video/mp4" />
        <source src="//d166gs6ce8o9t3.cloudfront.net/Tenet_Corp.webm" type="video/webm" />
      </video>
      <video controls="" poster="//d166gs6ce8o9t3.cloudfront.net/Tenet_Corp.jpg">
        <source src="//d166gs6ce8o9t3.cloudfront.net/Tenet_Corp.mp4" type="video/mp4" />
        <source src="//d166gs6ce8o9t3.cloudfront.net/Tenet_Corp.webm" type="video/webm" />
      </video>
    </ColumnLayout>
  ));
