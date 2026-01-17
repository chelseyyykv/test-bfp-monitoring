import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("auth.js loaded ✅");

  document.getElementById("loginBtn").addEventListener("click", login);
  document.getElementById("resetBtn").addEventListener("click", resetPassword);
});

function login(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}

function resetPassword(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Enter your email first.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => alert("Password reset email sent!"))
    .catch(error => alert(error.message));
}