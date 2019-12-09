import { Box, Flex } from '@theme-ui/components';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Nav from '../components/nav';

export default ({ children }) => (
  <>
    <Meta />
    <Flex
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        // margin: '-8px',
      }}>
      <Box
        sx={{
          width: '100%',
        }}>
        <Nav />
      </Box>
      <Box
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}>
        {children}
      </Box>
      <Footer />
    </Flex>
  </>
);
