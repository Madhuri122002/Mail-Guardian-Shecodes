import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Get elements from the DOM
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const submit = document.getElementById('Submit');
const login = document.getElementById('Login'); // Corrected the variable name to 'login'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx-7jFbvf6F9VYzjWUe23WHrFx3RChgww",
  authDomain: "mail-guardian-73f26.firebaseapp.com",
  projectId: "mail-guardian-73f26",
  storageBucket: "mail-guardian-73f26.appspot.com",
  messagingSenderId: "793449278613",
  appId: "1:793449278613:web:2b4ca33f7153e33c5a3f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listeners for toggling sign-in and sign-up mode
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Event listener for the submit button (sign-up)
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

// Event listener for the login button (sign-in)
login.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Signed in successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
