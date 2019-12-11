import styled from '@emotion/styled';
import Column from '../components/Column';
import Container from '../components/Container';
import Footer from './sections/Footer';
import Meta from './sections/Meta';
import Nav from './sections/Nav';

const Main = styled(Container)(
  props => `
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props.theme.bg.default};
`,
);

const FlexContainer = styled(Column)`
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
`;

const MainBody = styled(Container)`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;

export default ({ children }) => (
  <>
    <Meta />
    <Main>
      <FlexContainer>
        <Nav />
        <MainBody>{children}</MainBody>
        <Footer />
      </FlexContainer>
    </Main>
  </>
);
