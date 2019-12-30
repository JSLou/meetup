import { Button, Flex, Link } from '@chakra-ui/core';
import React from 'react';

const Nav = () => (
  <Flex>
    <Link href="/">
      <Button variant="primary">Home</Button>
    </Link>

    <Link href="about">
      <Button>About</Button>
    </Link>

    <Link href="meetups">
      <Button>Meetups</Button>
    </Link>

    <Link href="#">
      <Button disabled>Disabled Button</Button>
    </Link>
  </Flex>
);

export default Nav;
