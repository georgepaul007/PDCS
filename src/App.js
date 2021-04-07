import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
