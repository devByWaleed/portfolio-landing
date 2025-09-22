// Logic For Updating Year Dynamically
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector("#current-year").innerHTML = currentYear;



// Logic For Updating Skills Dynamically
var typed = new Typed("#typing", {
    strings: ["Web Designer", "Problem Solver", "Frontend Developer", "Tech Enthusiasts"],
    typeSpeed: 80,       // typing speed
    backSpeed: 50,       // backspacing speed
    backDelay: 1500,     // pause before backspacing
    loop: true           // keep looping
});



// Section IDs in order
let sectionArray = ["home", "projects", "tech", "contact"];

// Get sections
let sections = sectionArray.map(id => document.getElementById(id));

// Hide all except first
sections.forEach((sec, i) => sec.style.display = (i === 0) ? "flex" : "none");

// Buttons
let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");

let index = 0; // start with first section
let sectionLength = sectionArray.length;

// Function to update UI
function updateSections() {
    sections.forEach((sec, i) => {
        sec.style.display = (i === index) ? "flex" : "none";
    });

    // Disable/enable buttons at edges
    if (index === 0) {
        leftBtn.disabled = true;
        leftBtn.classList.add("cursor-not-allowed", "opacity-50");
    } else {
        leftBtn.disabled = false;
        leftBtn.classList.remove("cursor-not-allowed", "opacity-50");
    }

    if (index === sectionLength - 1) {
        rightBtn.disabled = true;
        rightBtn.classList.add("cursor-not-allowed", "opacity-50");
    } else {
        rightBtn.disabled = false;
        rightBtn.classList.remove("cursor-not-allowed", "opacity-50");
    }

}

// Left button click
leftBtn.addEventListener("click", function () {
    if (index > 0) {
        index--;
        updateSections();
    }
});

// Right button click
rightBtn.addEventListener("click", function () {
    if (index < sectionLength - 1) {
        index++;
        updateSections();
    }
});

// Initial state
updateSections();



// function For EmailJS Functionality
function sendMail(event) {

    let status = document.getElementById("formStatus");

    event.preventDefault();

    // Parameters for the email
    let params = {
        user_name: document.getElementById("personName").value,
        user_email: document.getElementById("personEmail").value,
        subject: document.getElementById("personSubject").value,
        user_message: document.getElementById("personMessage").value,
    }

    emailjs.send("service_ey5gs2k", "template_1to4cqc", params)
        .then(function (response) {
            status.textContent = `${response.text}, Email has been sent`
            console.log(response);
            // Optionally clear the form here
            event.target.reset();

        }, function (error) {
            status.textContent = `Error: ${error}`
        });
}