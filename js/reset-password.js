//reset-password.js
import { app } from "./firebase-config.js";
import {
  getAuth,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("resetbtn").addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = document.getElementById("emailreset").value;

  if (!emailValue) {
    alert("Please enter an email address.");
    return;
  }

  sendPasswordResetEmail(auth, emailValue)
    .then(() => {
      alert("Password reset email sent! Check your inbox.");
      window.location.href = "../login/"; // optional redirect
    })
    .catch((error) => {
      alert(error.message);
    });
});
