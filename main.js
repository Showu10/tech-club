// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7A196WuYKH8q2M-NfiwrzoNuaDtheIRw",
    authDomain: "tech-club-registration-form.firebaseapp.com",
    databaseURL: "https://tech-club-registration-form-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tech-club-registration-form",
    storageBucket: "tech-club-registration-form.appspot.com",
    messagingSenderId: "810071046121",
    appId: "1:810071046121:web:2345c3876e40a7bc433d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference Messages Collection

const messagesRef = firebase.database().ref("messages");

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const dob = document.querySelector("#dob");
const about = document.querySelector("#about");
const achievements = document.querySelector("#achievements");
const grade = document.querySelector("#grade");
const radiobtn = document.querySelector(".radio-btn");
const btn = document.querySelector(".submit-btn");

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    if(name.value == "" || email.value == "" || dob.value == "" || about.value == "" || achievements.value == "" || grade.value == "" || radiobtn.value == "") {
        alert("Please enter all fields");
    } else {
        const nameValue = name.value;
        const emailValue = email.value;
        const dobValue = dob.value;
        const aboutValue = about.value;
        const achievmentsValue = achievements.value;
        const gradeValue = grade.value;
        const radiobtnValue = radiobtn.value;
        
        saveMessage(nameValue, emailValue, dobValue, aboutValue, achievmentsValue, gradeValue, radiobtnValue);

        alert(`
        ${name.value}
        ${email.value}
        ${dob.value}
        ${about.value}
        ${achievements.value}
        ${grade.value}
        ${radiobtn.value}
        `);
        name.value = "";
        email.value = "";
        dob.value = "";
        about.value = "";
        achievements.value = "";
        grade.value = "";
        radiobtn.value = "";
    }
}


// Save the message
function saveMessage(nameValue, emailValue, dobValue, aboutValue, achievmentsValue, gradeValue, radiobtnValue) {
    const newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        nameValue: nameValue,
        emailValue: emailValue,
        dobValue: dobValue,
        aboutValue: aboutValue,
        achievmentsValue: achievmentsValue,
        gradeValue: gradeValue,
        radiobtnValue: radiobtnValue,
    });
}