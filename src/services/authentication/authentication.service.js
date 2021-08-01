import * as firebase from "firebase";

export const loginRequest = (email, password) => {
  console.log("Login Request");
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
