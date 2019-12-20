import styled from '@emotion/styled';
import { mediaQuery } from '@theme';
import Container from './Container';

const Main = styled(Container)`
  display: flex;
  margin-top: 0.5rem;
  width: 100%;

  ${mediaQuery.small({
    flexDirection: 'column',
  })}
`;

const Left = styled(Container)`
  width: 50%;
`;

const Right = styled(Container)`
  width: 50%;
`;

const DualBlock = ({ first, second }) => (
  <Main>
    <Left centerContent>{first}</Left>
    <Right centerContent>{second}</Right>
  </Main>
);

export default DualBlock;
