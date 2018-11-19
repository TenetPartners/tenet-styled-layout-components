/* eslint-disable function-paren-newline */
import React from 'react';
import renderer from 'react-test-renderer';
import Content, { HTMLContent } from '../Content';

describe('Content', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Content content="<p>hello</p>" />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    const div = tree.root.findByType('div');
    expect(div.children).toEqual(['<p>hello</p>']);
  });

  it('renders correctly given a class', () => {
    const tree = renderer.create(
      <Content content="<p>hello</p>" className="asdf" />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    const div = tree.root.findByType('div');
    expect(div.props.className).toBe('asdf');
  });
});

describe('HTMLContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <HTMLContent content="<p>hello</p>" />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    const div = tree.root.findByType('div');
    expect(div.props.dangerouslySetInnerHTML).toEqual({ __html: '<p>hello</p>' });
    expect(div.children).toEqual([]);
  });

  it('renders correctly given a class', () => {
    const tree = renderer.create(
      <HTMLContent content="<p>hello</p>" className="asdf" />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    const div = tree.root.findByType('div');
    expect(div.props.className).toBe('asdf');
  });

  it('renders the tag provided', () => {
    const tree = renderer.create(
      <HTMLContent content="<p>hello</p>" tag="h3" />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    expect(tree.root.findByType('h3')).toBeDefined();
  });
});
