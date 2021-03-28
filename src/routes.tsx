import { Router, Route } from "brouther";
import { Suspense, lazy, StrictMode } from "react";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Route404 from "./pages/error/404";
import Details from "./pages/Details";

export const Routes = () => {
  const history = createBrowserHistory();

  return (
    <StrictMode>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router history={history} notFound={Route404}>
          <Route path="/" component={Home} />
          <Route path="/details" component={() => <Details />} />
          <Route path="/index" component={() => <Home />} />
        </Router>
      </Suspense>
    </StrictMode>
  );
};
