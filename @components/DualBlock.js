import { Flex } from '@chakra-ui/core';

const DualBlock = ({ first, second }) => (
  <Flex w="100%" mt="0.5rem">
    <Flex justifyContent="center" alignItems="center">
      {first}
    </Flex>
    <Flex justifyContent="center" alignItems="center">
      {second}
    </Flex>
  </Flex>
);

export default DualBlock;
