import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  variant,
} from 'styled-system';

const applyBoolStyles = ({ centerContent }) => {
  let styles = '';
  if (centerContent)
    styles =
      styles + 'display: flex; justify-content: center; align-items: center;';

  return styles;
};

const Container = styled('div')(
  {
    boxSizing: 'border-box',
  },
  applyBoolStyles,
  compose(
    space,
    layout,
    color,
    background,
    border,
    position,
    flexbox,
    grid,
    // Just for testing -- use actual Row and Column components
    variant({
      variants: {
        row: {
          display: 'flex',
          flexDirection: 'row',
        },
        column: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    }),
  ),
);

Container.defaultProps = {};

export default Container;
