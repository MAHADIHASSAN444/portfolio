import React from 'react';
import Foter from '../Foter/Foter';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <main className='container contact'>
        <Navbar />
        <section className="d-flex flex-column align-items-center  my-5">
            <h1><span className='text-danger'>Contact</span> Me</h1>
            <div className="formArea">
                <form action="https://formspree.io/f/xyybjwar" method="POST" >
                
                    <div className="form-group">
                        <input className="form-control" name="name" placeholder="Your Name"  />
                        {<span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input className="form-control" name="subject" placeholder="Subject"  />
                        { <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input className="form-control" name="email" placeholder="Your Email"  />
                        { <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <textarea className="form-control my-3" name="message" cols="5" rows="5" placeholder="Your Message" /> 
                        {  <span>This field is required</span>}
                    </div>

                    <input className="form-control btn-success" type="submit" />
                </form>
            </div>
        </section>
    <Foter/>
    </main>

    );
};

export default Contact;