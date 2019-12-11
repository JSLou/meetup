import { Container, Row } from '@components';
import styled from '@emotion/styled';

const Left = styled(Row)(props => ``);

const Right = styled(Row)(props => ``);

const Footer = () => {
  return (
    <Row bg="black" color="secondary">
      <Container width="50%">Footer-Left</Container>
      <Container width="50%">Footer-Right</Container>
    </Row>
  );
};

export default Footer;
