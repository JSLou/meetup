import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import {
  border,
  buttonStyle,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';

const applyBooleanProps = props => {
  let styles = '';

  if (props.disabled) {
    return `
      &:disabled {
        background-color: ${themeGet('bg.disabled', '#ccc')(props)};
        color:${themeGet('colors.disabled', 'white')(props)};
        &:hover {
          cursor: not-allowed;
        }
      }
    `;
  }

  return styles;
};

const Button = styled('button')(
  {},
  applyBooleanProps,
  compose(
    color,
    buttonStyle,
    typography,
    layout,
    space,
    border,
    flexbox,
    grid,
    position,
    variant({
      variants: {
        primary: {
          color: 'white',
          bg: 'primary',
          '&:hover': {
            bg: 'secondary',
          },
        },
        secondary: {
          color: 'white',
          bg: 'secondary',
        },
      },
    }),
  ),
);

Button.defaultProps = {
  px: 3,
  py: 1,
  fontSize: 2,
};

export default Button;
