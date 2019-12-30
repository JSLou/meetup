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

const Meetups = () => {
  return (
    <div>
      <h1>Meetups</h1>
      <p>TODO...</p>
    </div>
  );
};

const MeetupsPage = () => {
  return (
    <MainLayout>
      <DualBlock first={<ImageContainer />} second={<Meetups />} />
    </MainLayout>
  );
};

export default MeetupsPage;
