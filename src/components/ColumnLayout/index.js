import styled from 'styled-components';

export default styled.div`
  display: flex;
  > * {
    flex-basis: ${({ children }) => 100 / children.length}%;
  }
`;
