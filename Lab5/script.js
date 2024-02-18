// script.js

function bookAppointment() {
    // Get values from form elements
    var service = document.getElementById("service").value;
    var datetime = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var professional = document.getElementById("professional").value;
    var creditCard = document.getElementById("credit-card").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    if (phone.trim() === "" || !/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
        return;
    }
    if (email.trim() === "" || !/[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    if (professional.trim() === "") {
        alert("Please select a professional.");
        return;
    }

    // If all validations pass, show the payment modal
    $('#paymentModal').modal('show');

}

function submitPayment() {
    // Get credit card details from the form
    var creditCard = document.getElementById("credit-card").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

    // Validate credit card number
    if (!isValidCreditCard(creditCard)) {
        alert("Please enter a valid credit card number.");
        return;
    }

    // Validate expiry date
    if (!isValidExpiryDate(expiryDate)) {
        alert("Please enter a valid expiry date in the format MM-YY.");
        return;
    }

    // Validate CVV
    if (!isValidCVV(cvv)) {
        alert("Please enter a valid CVV.");
        return;
    }

    $('#paymentModal').modal('hide');

    // Notify the user that the appointment has been booked
    alert("Your appointment has been booked! We will contact you shortly.");

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("credit-card").value = "";
    document.getElementById("expiry-date").value = "";
    document.getElementById("cvv").value = "";

    // Scroll the page to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Function to validate credit card number
function isValidCreditCard(creditCard) {
    return /^\d{16}$/.test(creditCard);
}

// Function to validate expiry date
function isValidExpiryDate(expiryDate) {
    return /^(0[1-9]|1[0-2])-(\d{2})$/.test(expiryDate);
}

// Function to validate CVV
function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
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
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$(document).ready(function () {
    // Initialize the datepicker
    $("#date").datepicker({
        beforeShowDay: function (date) {
            var day = date.getDay();
            var unavailableDays = {
                'John Doe': [1],    // John is unavailable on Mondays (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
                'Emma Smith': [3],  // Emma is unavailable on Wednesdays
                'Sarah Johnson': [5]  // Sarah is unavailable on Fridays
            };

            var professional = $("#professional").val(); // Get the selected professional

            // Disable weekends (Saturday and Sunday)
            if (day === 0 || day === 6) {
                return [false, ''];
            }

            if (unavailableDays.hasOwnProperty(professional)) {
                return [unavailableDays[professional].indexOf(day) === -1, '']; // Return true if day is not in the unavailable days array
            } else {
                return [true, '']; // Return true by default if professional is not found
            }
        }
    });
});