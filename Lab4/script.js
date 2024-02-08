// script.js



function bookAppointment() {
    // Get values from form elements
    var service = document.getElementById("service").value;
    var datetime = document.getElementById("datetime").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Validation for name and email
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    if (phone.trim() === "" || !/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
        return;
    }
    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create an object to store the appointment details
    var appointment = {
        service: service,
        datetime: datetime,
        name: name,
        email: email,
        phone: phone
    };

    // Example: Send appointment details to a server-side script for processing
    // Replace this with your actual code to book the appointment
    console.log(appointment);
    alert("Your appointment has been booked! We will contact you shortly.");
}

// Function to validate email format
function isValidEmail(email) {
    var emailVer = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailVer.test(email);
}

// Function to validate phone number format
function isValidPhoneNum(phone) {
    var phoneNumVer = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return phoneNumVer.test(phone);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}