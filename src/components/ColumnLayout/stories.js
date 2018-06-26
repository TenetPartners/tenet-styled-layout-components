/* eslint-disable import/no-extraneous-dependencies */
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
  ));
