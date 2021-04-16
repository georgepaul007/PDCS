import react, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/dashboard.css";

const DashBoard = (props) => {
  const logOut = () => {
    props.handler();
    window.location.reload();
  };
  return (
    <div>
      <div className="dashboard-nav">
        {" "}
        <div className="nav-details">
          <p className="displayName">Welcome {props.user.displayName} ! </p>
          <img src={props.user.photoURL} className="profile-pic" />{" "}
          <button onClick={logOut} className="btn-logout">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
