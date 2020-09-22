import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Login.css";

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  
  const handleBlur = (e) => {
   
    let isEPValid = true;
    if (e.target.name === "email") {
      isEPValid = /\S+@\S+\.\S+/.test(e.target.value);
      
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isEPValid = passwordHasNumber && isPasswordValid;
    }

    if (isEPValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };


  const handleSubmit = (e) => {
    if (newUser && e.target[3].value !== e.target[4].value) {
      alert("Enter a valid password");
    } else {
      if (newUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = "";
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
            history.replace(from);
            verifyingEmail();
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
      }
    }
    

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);

          history.replace(from);
          console.log("sign in user info", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleFBLogedIn = () => {
    firebase.auth().signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  const verifyingEmail = () => {
    var user = firebase.auth().currentUser;

    user
      .sendEmailVerification()
      .then(function () {
       
      })
      .catch(function (error) {
        
      });
  };



  const ForgotPassword = (email) => {
    var auth = firebase.auth();

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <Container>
      <Row>
        <Col sm={6} className="logggedin-from offset-md-3">
          <h4 style={{ color: "red" }}>{user.error}</h4>
          <div className="text-center">
            {user.success && (
              <h4 style={{ color: "green" }}>
                User {newUser ? "Created" : "Logged In"} Successfully
              </h4>
            )}
          </div>
          {newUser ? <h1 style={{color : "white"}}>Create an account</h1> : <h1 style={{ color: "white" }}>Login</h1>}
          <form onSubmit={handleSubmit}>
            {newUser && (
              <input name="firstname" type="text" onBlur={handleBlur} className='form-control'  placeholder="First Name"/>
            )}
            <br />
            {newUser && (
            <input name="lastname" type="text"  onBlur={handleBlur} className='form-control' placeholder="Last Name"/>
            )}
            <br />
            <input type="email"  name="email" onBlur={handleBlur} className="form-control" placeholder="Email Address" required/>
            <br />
            <input  type="password" name="password" onBlur={handleBlur} id="" className="form-control" placeholder=" Password" required/>
            <br />
            {newUser && (
              <input type="password" className='form-control' name="confirmPassword" onBlur={handleBlur} id="" placeholder="Confirm Password" required/>
            )}
            <br />

            {!newUser && (
              <input  type="checkbox" style={{ width: "12px" }} id=""/>
            )}

            {!newUser && (
              <label>
                <span  onClick={() => ForgotPassword(user.email)}>
                  Forgot Password
                </span>
              </label>
            )}
            <br />
            <Button variant="warning" type="submit" size="lg" block>
              {newUser ? "Sign Up" : "Sign In"}
            </Button>
          </form>
          <p className="text-center">
            {newUser ? "Already have an account?" : "Don't have an account?"}
            <span
              className="text-warning pointer"
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? "Login" : " Create an account"}
            </span>
          </p>

          <p className="border"></p>
         
          <Button
            variant="warning" type="submit" size="lg" style={{ borderRadius: "50px" }} block  onClick={handleFBLogedIn} >
            <span className="ml-5">Continue With Facebook</span>
          </Button>
          <br />
          
          <Button variant="warning" type="submit" size="lg" style={{ borderRadius: "50px" }} block onClick={handleGoogleLogin}>
            <span className="ml-5">Continue With Google</span>
          </Button>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;