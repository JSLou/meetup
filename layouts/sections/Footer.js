import styled from '@emotion/styled';
import Container from '../../components/Container';
import Row from '../../components/Row';

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
