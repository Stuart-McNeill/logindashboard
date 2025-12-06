// dashboard.js
import { app } from "./firebase-config.js";
import { 
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../index.html";
    return;
  }

  document.getElementById("namelabel").textContent = user.email;
});

document.getElementById("logoutbtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "../index.html";
  });
});
