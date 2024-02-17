// script.js

function bookAppointment() {
    // Get values from form elements
    var service = document.getElementById("service").value;
    var datetime = document.getElementById("datetime").value;
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

$(function() {
    // Function to check if a date is a weekend (Saturday or Sunday)
    function isWeekend(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }

    // Function to check if a date is unavailable for the selected employee
    function isUnavailable(date, professional) {
        switch (professional) {
            case 'John Doe':
                return date.getDay() === 1; // John Doe unavailable on Mondays
            case 'Emma Smith':
                return date.getDay() === 3; // Emma Smith unavailable on Wednesdays
            case 'Sarah Johnson':
                return date.getDay() === 5; // Sarah Johnson unavailable on Fridays
            default:
                return false;
        }
    }

    // Initialize the datepicker with default availability
    $("#date").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: 'mm/dd/yy',
        minDate: new Date('01/01/1900'),
        maxDate: '+1Y',
        beforeShowDay: function(date) {
            var isWeekday = !isWeekend(date);
            var professional = $('#professional').val();
            var isAvailable = !isUnavailable(date, professional);

            // Apply CSS class to grey out the unavailable dates
            var cssClass = isAvailable ? '' : 'unavailable';

            // Customize title attribute for tooltip
            var tooltip = isAvailable ? '' : 'Not available for ' + professional;

            return [isWeekday && isAvailable, cssClass, tooltip];
        }
    });

    // Event listener for when the professional selection changes
    $('#professional').change(function() {
        // Update the datepicker when the professional changes
        $("#date").datepicker('refresh');
    });

    $('input').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Function to add click effect to input fields
    $('input').click(function() {
        $(this).addClass('clicked');
    });

    // Remove click effect after a short delay
    $('input').mouseup(function() {
        var inputField = $(this);
        setTimeout(function() {
            inputField.removeClass('clicked');
        }, 200);
    });
});
