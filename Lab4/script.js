// script.js

$(document).ready(function() {
    // Function to handle form submission
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // You can add your form submission logic here
        // For example, you can use AJAX to submit the form data to a server-side script
        
        // For demonstration purposes, let's just log the form data to the console
        var formData = $(this).serialize();
        console.log("Form data:", formData);
        
        // Optionally, you can display a success message or redirect the user to a thank you page
        
        // Open the modal
        $("#successModal").modal("show");
    });

    // Function to handle "Book Now" button click
    $(".btn-book-now").click(function() {
        // You can add your logic here to handle the booking process
        // For example, you can display a modal with a booking form
        alert("Booking functionality coming soon!");
    });
});
