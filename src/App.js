import './App.css';
import { ControlCentrePage } from "./Pages/ControlCentrePage/ControlCentrePage";
import { AddDetailsPage } from "./Pages/AddDetailsPage/AddDetailsPage";
import { BookKeepingPage } from "./Pages/BookKeepingPage/BookKeepingPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ControlCentrePage />
          </Route>
          <Route path="/AddDetails">
            <AddDetailsPage />
          </Route>
          <Route path="/BookKeeping">
            <BookKeepingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
