import { Box, Flex } from '@theme-ui/components';

const Footer = () => {
  return (
    <Flex
      sx={{
        margin: 0,
        backgroundColor: 'blue',
        width: '100%',
      }}>
      <Box
        sx={{
          backgroundColor: 'red',
          width: '50%',
        }}>
        FOOTER
      </Box>
    </Flex>
  );
};

export default Footer;
