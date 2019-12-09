import { Button } from '@theme-ui/components';
import React from 'react';
import ThemeToggle from './themeToggle';

const Nav = () => (
  <div>
    Nav
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <ThemeToggle />
  </div>
);

export default Nav;
