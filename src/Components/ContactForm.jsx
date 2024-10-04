import React from 'react';

export function ContactForm() {
    return(            
            <section className="contact">
                <h2>Contact Us</h2>
                <form >
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
            )
}