import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("auth.js loaded ✅");

  const loginBtn = document.getElementById("loginBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", login);
    console.log("Login button listener attached");
  } else {
    console.error("Login button not found!");
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetPassword);
  }
});

function login(e) {
  e.preventDefault();
  console.log("Login function called");
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Password length:", password.length);

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }

  console.log("Attempting to sign in...");
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login successful!", userCredential.user);
      alert("Login successful! Redirecting...");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error("Login error:", error);
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