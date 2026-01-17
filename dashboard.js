// js/dashboard.js
import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
