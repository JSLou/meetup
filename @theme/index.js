import { theme as defaultTheme } from '@chakra-ui/core';

const breakpoints = ['320px', '576px', '768px', '992px', '1280px'];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const colors = {
  ...defaultTheme.colors,
  gray: {
    50: '#f8faf9',
    100: '#eaeeed',
    200: '#dbe2e0',
    300: '#cbd5d1',
    400: '#b9c7c2',
    500: '#a6b7b0',
    600: '#8fa59c',
    700: '#748f85',
    800: '#597168',
    900: '#34423d',
  },
};

export default {
  ...defaultTheme,
  breakpoints,
  colors,
};
