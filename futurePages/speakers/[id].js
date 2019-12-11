import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Main from '../../layouts/main';

const Speaker = () => {
  const [speaker, setSpeaker] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getSpeaker() {
      const res = await fetch(`/api/speakers/${id}`);
      const { speaker } = await res.json();
      setSpeaker(speaker);
    }

    getSpeaker();
  }, [id]);

  return (
    <Main>
      <h1>Speaker:</h1>
      {speaker && (
        <div key={speaker.id}>
          <p>
            <strong>First Name:</strong>
            {speaker.firstName}
          </p>
        </div>
      )}
    </Main>
  );
};

export default Speaker;