import react, { useEffect, useState } from "react";
import firebase from "firebase";
import fire from "../config/firebase.config";
import Dashboard from "./Dashboard";
import DashBoard from "./Dashboard";

const Register = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        // setUser(user);
        // setLoggedIn(true);
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
        setUser(user);
        setLoggedIn(true);
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
        <DashBoard user={user} handler={logoutHandler} />
      ) : (
        <div id="login-box">
          <div class="left">
            <h1>Sign up!</h1>

            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Re-enter password"
            />

            <input type="submit" name="signup_submit" value="Sign me up" />
          </div>

          <div class="right">
            <span class="loginwith">
              Sign in with
              <br />
              social network
            </span>

            <button class="social-signin facebook">Log in with Facebook</button>
            <button class="social-signin twitter">Log in with Twitter</button>
            <button class="social-signin google" onClick={googleSubmit}>
              Log in with Google
            </button>
          </div>
          <div class="or">OR</div>
        </div>
      )}
    </div>
  );
};

export default Register;
