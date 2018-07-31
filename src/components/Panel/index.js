import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled(({
  color,
  backgroundColor,
  imagePosition,
  grid,
  rows,
  maxWidth,
  ...rest
}) => <section {...rest} />)`
  ${({ maxWidth }) => maxWidth && css`
    ${breakpoint('max')`
      padding-left: calc(50vw - ${maxWidth / 16 / 2}em);
      padding-right: calc(50vw - ${maxWidth / 16 / 2}em);
    `}
  `}

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  ${({ backgroundImage }) => backgroundImage && css`
    display: grid;

    > img {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      width: 100vw;
      max-width: none;

      ${({ maxWidth }) => maxWidth && css`
        ${breakpoint('max')`
          margin-left: calc((50vw - ${maxWidth / 16 / 2}em) * -1);
          margin-right: calc((50vw - ${maxWidth / 16 / 2}em) * -1);
        `}
      `}
    }

    > .content-container {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
    }
  `}
`;
