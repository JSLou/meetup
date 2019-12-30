import { Flex } from '@chakra-ui/core';
import { Footer, Meta, Nav } from '../@components';

// const Main = styled(Container)(
//   props => `
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   background-color: ${props.theme.bg.default};
// `,
// );

// const FlexContainer = styled(Column)`
//   min-height: 100vh;
//   width: 100%;
//   max-width: 1200px;
// `;

// const MainBody = styled(Container)`
//   width: 100%;
//   flex-grow: 1;
//   display: flex;
// `;

export default ({ children }) => (
  <>
    <Meta />
    <Flex justifyContent="center">
      <Flex minH="100vh" w="100%" maxW="1200px">
        <Nav />
        <Flex flexGrow={1} w="100%">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  </>
);
