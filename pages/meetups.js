import { DualBlock } from '@components';
import styled from '@emotion/styled';
import { MainLayout } from '@layouts';

const Image = styled.img`
  width: 600px;
  height: 600px;
`;

const ImageContent = () => {
  return <Image src="http://lorempixel.com/600/600" alt="MEETUPS IMAGE" />;
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
      <DualBlock first={<ImageContent />} second={<Meetups />} />
    </MainLayout>
  );
};

export default MeetupsPage;
