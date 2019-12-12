import { DualBlock } from '@components';
import styled from '@emotion/styled';
import { MainLayout } from '@layouts';

const Image = styled.img`
  width: 600px;
  height: 600px;
`;

const ImageContainer = () => {
  return <Image src="http://lorempixel.com/600/600" alt="ABOUT IMAGE" />;
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>TODO...</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <MainLayout>
      <DualBlock first={<ImageContainer />} second={<About />} />
    </MainLayout>
  );
};

export default AboutPage;
