// create.js
import { app } from "./firebase-config.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("createbtn").addEventListener("click", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);

    await setDoc(doc(db, "users", cred.user.uid), {
      fullName,
      email
    });

    alert("Account created!");
    window.location.href = "../index.html";

  } catch (error) {
    alert(error.message);
  }
});
