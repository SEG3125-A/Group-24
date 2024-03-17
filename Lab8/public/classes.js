import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
