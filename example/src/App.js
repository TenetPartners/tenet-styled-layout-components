import React, { Component } from 'react';
import { ColumnLayout, Panel, Content, HTMLContent } from 'tenet-styled-layout-components';

export default class App extends Component {
  render () {
    return (
      <div>
        <ColumnLayout>
          <p>hello</p>
          <p>world</p>
        </ColumnLayout>
        <Panel maxWidth={1200}>
          <p>hello</p>
          <p>world</p>
        </Panel>
        <Content content="hello world" />
        <HTMLContent content="<p>hello</p><p>world</p>" />
      </div>
    )
  }
}
