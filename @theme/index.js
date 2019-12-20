// const breakpoints = ['40em', '52em', '64em', '80em'];

const breakpoints = ['320px', '576px', '768px', '992px', '1280px'];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const mediaQuery = Object.keys(sizeAlias).reduce((acc, label) => {
  acc[label] = `@media (min-width: ${sizes[label]}px)`;

  return acc;
}, {});

const theme = {
  breakpoints,
  colors: {
    default: 'black',
    primary: '#6699CC',
    secondary: '#EE99FF',
    muted: '#CCC',
    success: '#004506',
    info: '#005459',
    warning: '#783c00',
    danger: '#570d00',
    disabled: 'white',
  },
  bg: {
    disabled: '#CCC',
    default: 'white',
    black: 'black',
    primary: '#6699CC',
    secondary: '#EE99FF',
    muted: '#CCC',
    success: '#75ff81',
    info: '#84eaf0',
    warning: '#ffb366',
    danger: '#ff6347',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      bg: 'secondary',
      color: 'background',
      '&:hover': {
        bg: 'primary',
      },
    },
  },
};

export default { theme };
