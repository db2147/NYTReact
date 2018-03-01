import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import SavedArticle from "./pages/SavedArticle/SavedArticle";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={Home} />
        <Route exact path="/ResultsPage/:id" component={ResultsPage} />
        <Route exact path="/SavedArticle/:id" component={SavedArticle} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>;

export default App;
