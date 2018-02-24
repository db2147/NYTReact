import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import News from "./News";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={Home} />
        <Route exact path="/news/:id" component={Home} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>;

export default App;
