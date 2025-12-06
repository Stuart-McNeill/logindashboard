//dashboard.js

import { app, db } from "./firebase-config.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "../login/";
    return;
  }

  try {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      document.getElementById("welcomeText").textContent =
        `Welcome, ${docSnap.data().fullname}!`;
    } else {
      // If doc does not exist, fallback:
      document.getElementById("welcomeText").textContent =
        "Welcome User";
    }

  } catch (err) {
    alert(err.message); // shows helpful diagnostic
  }
});
