import { Button } from '@theme-ui/components';
import ThemeToggle from '../components/themeToggle';
import Main from '../layouts/main';

const handlePrimaryClick = e => {
  e.preventDefault();
  console.log('PRIMARY BUTTON CLICK');
};

const handleNormalClick = e => {
  e.preventDefault();
  console.log('PRIMARY BUTTON CLICK');
};

const Home = () => (
  <Main>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>

    <ThemeToggle />

    <div className="hero">
      <h1 className="title">Welcome to JsLou!</h1>
      <p className="description">
        Louisville Kentucky's Meetup for all things JavaScript.
      </p>

      <div className="row">
        <a href="/speakers" className="card">
          <h3>Speakers &rarr;</h3>
          <p>Meet our past speakers! Looking to give a talk?</p>
        </a>
        <a href="/meetups" className="card">
          <h3>Meetups</h3>
          <p>Looking for an old talk? Want to see what's coming up?</p>
        </a>
        <a href="/about" className="card">
          <h3>About JsLou</h3>
          <p>Learn more about JsLou and what we aim to do.</p>
        </a>
      </div>
    </div>
  </Main>
);

export default Home;
