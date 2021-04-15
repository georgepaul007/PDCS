import "./App.css";
import "./images/icons/favicon.ico"
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "./fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
import "./vendor/animate/animate.css"
import "./vendor/css-hamburgers/hamburgers.min.css"
import "./vendor/animsition/css/animsition.min.css"
import "./vendor/select2/select2.min.css"
import "./vendor/daterangepicker/daterangepicker.css"
import "./css/util.css"
import "./css/main.css"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import Register from "./pages/Register";
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
        <Route path ="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
