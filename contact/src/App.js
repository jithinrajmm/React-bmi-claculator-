import logo from "./logo.svg";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Favorite from "./pages/favourite";
import Nav from "./components/Nav";
import Notfound from "./pages/notfound";
import Form from "./components/form";

function App() {
  return (
    <Router>
      <Nav></Nav>

      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/Favorite">
            <Favorite></Favorite>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
