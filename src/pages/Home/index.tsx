import { Fragment } from "react";
import { Link } from "brouther";

const Home = () => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <Link className="App-link" href="/details">
        Detalhes
      </Link>
    </Fragment>
  );
};

export default Home;
