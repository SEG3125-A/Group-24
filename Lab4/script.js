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
