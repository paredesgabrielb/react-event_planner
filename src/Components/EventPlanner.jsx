import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';
import EventCategory from './EventCategory'
import Features from './Features'
import {ContactForm} from './ContactForm'
import {Testimonials} from './Testimonials'

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>
            <EventCategory />
            <Features />
            <Testimonials />
            <ContactForm/>
            <Footer />
        </div>
    );
};

export default EventPlanner;
