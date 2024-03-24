import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Coaches() {
    return (
        <div>
            <Header />
            <main>
                <section id="coaches">
                    <h2>Meet Our Coaches</h2>
                     </div>
                    <div className="coach">
                        <img src="/coach1.jpg" alt="Coach Alice Smith" />
                        <div className="coach-details">
                            <h3>Alice Smith</h3>
                            <p>Specialization: Powerlifting</p>
                            <p>Background: Alice has been passionate about strength training since her teenage years. She holds multiple powerlifting records in her region and has coached numerous athletes to success in local and national competitions. With a background in sports science, Alice combines her practical experience with scientific knowledge to help her clients reach their full potential.</p>
                            <p>Contact: alice@example.com</p>
                        </div>
                    </div>
                    <div className="coach">
                        <img src="/coach2.jpg" alt="Coach Mark Johnson" />
                        <div className="coach-details">
                            <h3>Mark Johnson</h3>
                            <p>Specialization: Olympic Weightlifting</p>
                            <p>Background: Mark is a former competitive Olympic weightlifter with over a decade of coaching experience. He has trained athletes of all levels, from beginners to elite competitors. Mark's coaching philosophy emphasizes technique mastery and mental focus. He believes that a strong mind is just as important as a strong body when it comes to achieving success in weightlifting.</p>
                            <p>Contact: mark@example.com</p>
                        </div>
                    </div>
                     </div>
                    <div className="coach">
                        <img src="/coach3.jpg" alt="Coach Emily Davis" />
                        <div className="coach-details">
                            <h3>Emily Davis</h3>
                            <p>Specialization: Bodybuilding</p>
                            <p>Background: Emily is a certified personal trainer and bodybuilding enthusiast. She fell in love with bodybuilding during her college years and has since dedicated herself to helping others sculpt their dream physiques. Emily's training approach combines traditional bodybuilding principles with modern scientific research, ensuring her clients achieve optimal muscle growth and aesthetic development.</p>
                            <p>Contact: emily@example.com</p>
                        </div>
                    </div>
                    {/* Add more coach profiles here */}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Coaches;
