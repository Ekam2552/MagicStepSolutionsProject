import './App.css';
import { ControlCentrePage } from "./Pages/ControlCentrePage/ControlCentrePage";
import { AddDetailsPage } from "./Pages/AddDetailsPage/AddDetailsPage";
import { BookKeepingPage } from "./Pages/BookKeepingPage/BookKeepingPage";
import { OtherOrdersPage } from "./Pages/OtherOrdersPage/OtherOrdersPage";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/MagicStepSolutionsProject">
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
          <Route path="/OtherOrders">
            <OtherOrdersPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
