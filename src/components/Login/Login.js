import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



const Login = () => {
    firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIN = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        
        <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{fontSize : '25px'}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{fontSize : '25px'}}> Password</Form.Label>
          <Form.Control style={{margin: '0 auto'}}  type="password" placeholder="Password"/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="warning" type="submit" style={{marginBottom: '10px'}}>
          Submit
        </Button>
        <br/>
        <Button variant="warning" onClick={handleGoogleSignIN}>
          Sign in with Google
        </Button>
      </Form>
      
 
        

    );
};

export default Login;