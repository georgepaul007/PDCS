import React, { useEffect, useState } from "react";
import firebase from "firebase";
import fire from "../config/firebase.config";
import Dashboard from "./Dashboard";

const GoogleSignIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ displayName: "", photo: "" });
  useEffect(() => {
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user logged in");
        console.log("heloo " + user.displayName);
        setLoggedIn(true);
        console.log(user);
        setUser({ displayName: user.displayName, photo: user.photoURL });
      } else {
        console.log("No user has logged in");
        // No user is signed in.
      }
    });
  }, []);
  const logoutHandler = () => {
    console.log("logout handler");
    fire
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const googleSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  };

  return (
    <div>
      {loggedIn ? (
        <Dashboard data={user} handler={logoutHandler} />
      ) : (
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41"></span>

              <form className="login100-form validate-form p-b-33 p-t-5">
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="User name"
                  />

                  <span
                    className="focus-input100"
                    data-placeholder="&#xe82a;"
                  ></span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                  />

                  <span
                    className="focus-input100"
                    data-placeholder="&#xe80f;"
                  ></span>
                </div>{" "}
                <div className="container-login100-form-btn m-t-32">
                  <button className="login100-form-btn" onClick={googleSubmit}>
                    {" "}
                    Login{" "}
                  </button>{" "}
                </div>{" "}
              </form>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default GoogleSignIn;
