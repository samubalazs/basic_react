import React from "react";
import Helmet from "react-helmet";

import userPage from "../components/user";

const Home = () => (
  <p>This is the home screen</p>
);

const WillMatch = () => (
  <div>
      <h2>This is the match page</h2>
      <Helmet>
          <title>Match Page</title>
      </Helmet>
  </div>
);

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const routes = [
  {
    path: "/",
    component: userPage,
    exact: true,
  },
  {
    path: "/will-match",
    component: WillMatch,
  },
  {
    path: "/will-not-match",
    component: NoMatch,
  },
];

export default routes;
