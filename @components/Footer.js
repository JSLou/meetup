import { Box, Flex } from '@chakra-ui/core';

const Footer = () => {
  return (
    <Flex bg="gray.500" color="white">
      <Box width="50%">Footer-Left</Box>
      <Box width="50%">Footer-Right</Box>
    </Flex>
  );
};

export default Footer;
