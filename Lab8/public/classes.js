import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Classes() {
    const [isClassBooked, setIsClassBooked] = useState(false);

    const handleClassBooking = () => {
        // Perform any booking logic here
        // For demonstration, we'll just set isClassBooked to true
        setIsClassBooked(true);
    };

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
                        <button onClick={handleClassBooking} disabled={isClassBooked}>
                            {isClassBooked ? 'Class Booked' : 'Book Now'}
                        </button>
                    </div>
                    {/* Add more classes as needed */}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Classes;
