/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Content, { HTMLContent } from '.';

addDecorator(withKnobs);

storiesOf('Content', module)
  .add('with regular content as a label', () => {
    const content = text('Content', 'hello world');
    return (
      <Content content={content} />
    )
  })
  .add('with css class', () => {
    const content = text('Content', 'hello world');
    const cssclass = text('CSS class', 'test');
    return (
      <Content content={content} className={cssclass} />
    )
  });

storiesOf('HTML Content', module)
  .add('with HTML content', () => (
    <HTMLContent content="<p>hello</p><p>new paragraph</p>" />
  ))
  .add('with css class', () => {
    const content = text('Content', 'hello world');
    const cssclass = text('CSS class', 'test');
    return (
      <HTMLContent content={content} className={cssclass} />
    )
  })
  .add('with different tag', () => {
    const content = text('Content', 'hello world');
    const tag = text('Tag', 'h2');
    return (
      <HTMLContent content={content} tag={tag}/>
    );
  });
