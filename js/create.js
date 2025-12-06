// create.js
import { app } from "./firebase-config.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("createbtn").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const fullname = document.getElementById("fullname").value; // 👈 NEW FIELD

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;

    // Save user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullname: fullname,
      email: email,
      createdAt: new Date()
    });

    alert("Account created!");
    window.location.href = "../login/";
    
  } catch (err) {
    alert(err.message);
  }
});
