import React, { Component } from 'react';
import { ColumnLayout } from 'tenet-styled-layout-components';

export default class App extends Component {
  render () {
    return (
      <div>
        <ColumnLayout>
          <p>hello</p>
          <p>world</p>
        </ColumnLayout>
      </div>
    )
  }
}
