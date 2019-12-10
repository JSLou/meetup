import { meetupById } from '../../../data/helpers';

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const meetup = meetupById(id);

  res.status(200).json({ meetup });
};
