import { getMeetups } from '../../../data/helpers';

export default (_req, res) => {
  const meetups = getMeetups();
  res.status(200).json({ meetups });
};
