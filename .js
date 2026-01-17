import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB611EuDf-x81dEyMzoQy7qo8lznU90gmc",
  authDomain: "bfp-monitoring-system.firebaseapp.com",
  projectId: "bfp-monitoring-system",
  storageBucket: "bfp-monitoring-system.firebasestorage.app",
  messagingSenderId: "597296130840",
  appId: "1:597296130840:web:7937fe168b2845a4370c6d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
