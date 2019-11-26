import { base, dark, deep } from '@theme-ui/presets';

export default {
  initialColorModeName: 'light',
  ...base,
  colors: {
    ...base.colors,
    modes: {
      dark: {
        ...dark.colors,
      },
      deep: {
        ...deep.colors,
      },
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      bg: 'secondary',
      color: 'background',
    },
  },
  styles: {
    ...base.styles,
  },
};
