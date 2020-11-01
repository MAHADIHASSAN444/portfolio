import React from 'react';
import Navbar from '../Navbar/Navbar';
import image from "../../mehedi.jpg"
import './About.css';
import Foter from '../Foter/Foter';
// import FooterC from '../Shear/FooterC/FooterC'

const About = () => {
    return (
        <main className='container' >
        <Navbar />
        <section className="my-5">
            <div className="row text-color">
                <div className="col-md-6">
                    <div>
                        <img className='img-fluid rounded-circle' src={image} alt="" />
                        <div className="">
                            <h2><span className="text-warning">Mehedi Hassan </span></h2>
                            <h3><strong>MERN Stak Developer</strong></h3>
                            <p className="">Expert in developing Single Page Application(SPA) using React.js and Node.js. I have a good knowledge in the Javascript, ES6, Bootstap-4 and also comfortable with Material UI, Express.js and MongoDB.</p>
                            <p>Client satisfaction is my pride. Love to develop modern and impressive websites for my clients and always responsible for the job.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <section className="">
                        <div className="">
                            <h4>My Skills</h4>
                            <div className="skill">
                                <span>Javascript</span>
                                <span>ES-6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>Redux.js</span>
                                <span>Bootstrap</span>
                                <span>Material-UI</span>
                                <span>HTML | HTML-5</span>
                                <span>CSS | CSS-3</span>
                                <span>Git</span>
                                <span>NPM</span>
                                <span>VS Code</span>
                                <span>Firebase</span>
                                <span>Netlify</span>
                                <span>Heroku</span>
                                <span>Python</span>
                                <span>Search engine optimization</span>
                            </div>
                        </div>
                        <div className="my-3">
                            <h4>Deep knoledge in</h4>
                            <div className="skill">
                                <span>Javascript</span>
                                <span>ES-6</span>
                                <span>React.js</span>
                                <span>Bootstrap</span>
                                <span>Material-UI</span>
                                <span>HTML | HTML-5</span>
                                <span>CSS | CSS-3</span>
                            </div>
                        </div>
                        <div className="">
                            <h4>Comfortable Skills</h4>
                            <div className="skill">
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>Firebase</span>
                                <span>Netlify</span>
                                <span>Heroku</span>
                                <span>Python</span>
                                <span>Computer Networking</span>
                            </div>
                        </div>
                        <div className="my-3">
                            <h4>Tools</h4>
                            <div className="skill">
                                <span>Git</span>
                                <span>NPM</span>
                                <span>VS Code</span>
                            </div>
                        </div>
                        <div className="">
                            <h4>Want to play with</h4>
                            <div className="skills">
                                <span>Javascript</span>
                                <span>ES-6</span>
                                <span>React.js</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>

       
    <Foter></Foter>
    </main>

    );
};

export default About;