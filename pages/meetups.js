import styled from '@emotion/styled';
import DualBlock from '../components/DualBlock';
import Main from '../layouts/main';

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
    <Main>
      <DualBlock first={<ImageContent />} second={<Meetups />} />
    </Main>
  );
};

export default MeetupsPage;
