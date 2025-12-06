// login.js
import { app } from "./firebase-config.js";
import { 
  getAuth, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("loginbtn").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);

    // 🔥 move immediately to dashboard
    window.location.href = "dashboard/";
    
  } catch (error) {
    alert(error.message);
  }
});
