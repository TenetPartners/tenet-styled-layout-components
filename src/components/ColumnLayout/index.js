import styled from 'styled-components';

export default styled.div`
  display: flex;
  > * {
    flex-basis: ${props => 100 / props.children.length}%;
  }
`;
