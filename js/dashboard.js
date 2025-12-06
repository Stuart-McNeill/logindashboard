//dashboard.js

import { app } from "./firebase-config.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

const nameLabel = document.getElementById("namelabel");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "../index.html";
    return;
  }

  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);

  if (snapshot.exists()) {
    const userData = snapshot.data();
    nameLabel.textContent = userData.fullName;
  } else {
    nameLabel.textContent = user.email;
  }
});

document.getElementById("logoutbtn").addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "../index.html");
});
