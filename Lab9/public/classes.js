import React from 'react';
import Header from './Header';
import Footer from './Footer';

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

function Classes() {
    return (
        <div>
            <Header />
            <main>
                <section id="classes">
                    <h2>Classes</h2>
                    <p>Explore our diverse range of classes tailored specifically for strength athletes.</p>
                    <div className="class">
                        <h3>Powerlifting</h3>
                        <p>A class focused on improving strength in the squat, bench press, and deadlift.</p>
                        <p>Schedule: Monday, Wednesday, Friday - 6:00 PM to 8:00 PM</p>
                        <button>Book Now</button>
                    </div>
                    <div className="class">
                        <h3>Olympic Weightlifting</h3>
                        <p>A class focusing on the snatch and clean and jerk lifts.</p>
                        <p>Schedule: Tuesday, Thursday - 7:00 PM to 9:00 PM</p>
                        <button>Book Now</button>
                    </div>
                    <div className="class">
                        <h3>Bodybuilding</h3>
                        <p>A class designed for muscle hypertrophy and aesthetics.</p>
                        <p>Schedule: Monday, Wednesday, Friday - 9:00 AM to 11:00 AM</p>
                        <button>Book Now</button>
                    </div>
                    {/* Add more classes as needed */}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Classes;
