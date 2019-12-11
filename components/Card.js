import styled from '@emotion/styled';
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
} from 'styled-system';

const applyBooleanProps = props => {
  let styles = '';
  if (props.linkable) styles + 'coursor: pointer';
  if (props.centerContent)
    styles + 'display: flex; justify-content:center; align-items:center;';

  return styles;
};

const Card = styled('div')(
  {
    boxSizing: 'border-box',
  },
  applyBooleanProps,
  compose(
    color,
    border,
    background,
    boxShadow,
    layout,
    space,
    flexbox,
    grid,
    position,
  ),
);

Card.defaultProps = {
  boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.5)',
  padding: 4,
};

export default Card;
