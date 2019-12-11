import Link from 'next/link';
import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';

const Nav = () => (
  <Container>
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
  </Container>
);

export default Nav;
