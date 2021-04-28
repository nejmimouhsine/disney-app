import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login.component";
import Header from "./components/Header/Header.component";
import Home from "./components/Home/Home.component";
import Detail from "./components/Detail/Detail.component";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
