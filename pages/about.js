import { Image } from '@chakra-ui/core';
import { DualBlock } from '@components';
import { MainLayout } from '@layouts';

const ImageContainer = () => {
  return (
    <Image
      w="600px"
      h="600px"
      src="http://lorempixel.com/600/600"
      alt="ABOUT IMAGE"
    />
  );
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
