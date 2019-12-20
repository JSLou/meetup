import styled, { css } from '@emotion/styled';
import { mediaQuery } from '@theme';
import Container from './Container';

const Main = styled(Container)`
  display: flex;
  margin-top: 0.5rem;
  width: 100%;

  ${mediaQuery.medium(css`
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  `)}
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

// import React from 'react';
// import styled, { css } from 'react-emotion';
// import { colors, mediaQuery } from '../../styles';

// const Container = styled('div')`
//   padding: 2rem 1.25rem 3rem;
//   color: ${props => props.color};
//   background-color: ${props => props.bgColor};
//   width: 100%;

//   ${mediaQuery.medium(css`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   `)}
// `;
// const Content = styled('div')`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

// ${mediaQuery.medium(css`
//   flex-direction: row;
//   align-item: stretch;
//   margin-top: 2.5rem;
//   max-width: 724px;
//   justify-content: space-between;
//   width: 100%;
// `)}

//   ${mediaQuery.large(css`
//     max-width: 1269px;
//     justify-content: center;

//     > div + div {
//       margin-left: 3rem;
//     }
//   `)}
// `;

// const FirstBlock = styled('div')`
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0 1.5rem;
//   width: 100%;

//   ${mediaQuery.medium(css`
//     margin: 0;
//     width: 50%;
//   `)}

//   ${mediaQuery.large(css`
//     width: 50%;
//     max-width: 578px;
//   `)}
// `;
// const SecondBlock = styled('div')`
//   max-width: 600px;
//   ${mediaQuery.medium(css`
//     max-width: 309px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   `)}

//   ${mediaQuery.large(css`
//     max-width: 578px;
//     width: 50%;
//   `)}
// `;

// const Header = styled('div')`
//   text-align: center;
// `;

// const DualBlock = ({
//   header,
//   firstBlock,
//   secondBlock,
//   bgColor = `${colors.multiMediaBackground}`,
//   color = `${colors.white}`
// }) => {
//   return (
//     <Container color={color} bgColor={bgColor}>
//       <Header>{header}</Header>
//       <Content>
//         <FirstBlock>{firstBlock}</FirstBlock>
//         <SecondBlock>{secondBlock}</SecondBlock>
//       </Content>
//     </Container>
//   );
// };

// export default DualBlock;
