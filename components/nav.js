import styled from '@emotion/styled';
import { Button, Flex } from '@theme-ui/components';
import React from 'react';
import ThemeToggle from './themeToggle';

const Container = styled(Flex)({
  width: '100%',
});

const Nav = () => (
  <Container>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <ThemeToggle />
  </Container>
);

export default Nav;
