// create.js
import { app } from "./firebase-config.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("createbtn").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Account created!");
      window.location.href = "index.html";
    })
    .catch((e) => alert(e.message));
});