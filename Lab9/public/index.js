import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Index() {
    return (
        <div>
            <Header />
            <main>
                {/* Hero Section */}
                <section id="hero">
                    <div className="hero-content">
                        <h1>Welcome to Craftsmanship Gym</h1>
                        <p>Transform your body and reach your fitness goals with our dedicated coaches and state-of-the-art facilities.</p>
                        <button className="btn">Get Started</button>
                    </div>
                </section>

                {/* About Section */}
                <section id="about">
                    <div className="container">
                        <h2>About Us</h2>
                        <p>Craftsmanship Gym is an environment dedicated to the advancement of serious strength athletes, providing top-notch facilities and experienced coaches to assist in your fitness journey.</p>
                    </div>
                </section>

                {/* Classes Section */}
                <section id="classes">
                    <div className="container">
                        <h2>Classes</h2>
                        <p>Explore our diverse range of classes tailored specifically for strength athletes.</p>
                        {/* List of classes */}
                        <ul>
                            <li>Powerlifting</li>
                            <li>Olympic Weightlifting</li>
                            <li>Bodybuilding</li>
                            {/* Add more classes as needed */}
                        </ul>
                    </div>
                </section>

                {/* Coaches Section */}
                <section id="coaches">
                    <div className="container">
                        <h2>Our Coaches</h2>
                        {/* Coach cards */}
                        <div className="coach-card">
                            <img src="coach1.jpg" alt="Coach" />
                            <h3>Alice Smith</h3>
                            <p>Specialization: Powerlifting</p>
                            <p>Contact: alice@example.com</p>
                        </div>
                        {/* Add more coach cards */}
                    </div>
                </section>

                {/* Membership Section */}
                <section id="membership">
                    <div className="container">
                        <h2>Membership</h2>
                        <p>Transparently explore our membership options and use our gym locator to find the nearest Craftsmanship Gym.</p>
                        {/* Membership plans */}
                        <h3>Membership Plans</h3>
                        <ul>
                            <li>Basic Membership</li>
                            <li>Premium Membership</li>
                            <li>Student Membership</li>
                            <li>Family Membership</li>
                        </ul>
                        <p>Contact us to learn more about membership plans and pricing.</p>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials">
                    <div className="container">
                        <h2>Testimonials</h2>
                        {/* Testimonial cards */}
                        <div className="testimonial-card">
                            <p>"Craftsmanship Gym has completely changed my fitness journey. The coaches are knowledgeable and supportive, and the community atmosphere keeps me motivated."</p>
                            <p>- John Doe</p>
                        </div>
                        {/* Add more testimonial cards */}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <div className="container">
                        <h2>Contact Us</h2>
                        <p>Have questions or need assistance? Contact us for more information.</p>
                        <address>
                            Craftsmanship Gym<br />
                            123 Fitness Ave<br />
                            City, State, Zip<br />
                            Phone: 123-456-7890<br />
                            Email: info@craftsmanshipgym.com
                        </address>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Index;
