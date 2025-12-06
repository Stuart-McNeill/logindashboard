// dashboard-protect.js
import { app } from "./firebase-config.js";
import { 
  getAuth, 
  onAuthStateChanged,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) window.location.href = "index.html";
  else document.getElementById("userInfo").innerText = "Logged in as " + user.email;
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "index.html");
});