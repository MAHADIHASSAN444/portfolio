import React from 'react';
import { Button, Nav,  } from 'react-bootstrap';

import image from "../../mehedi.jpg"
import Foter from '../Foter/Foter';
import Navbar from '../Navbar/Navbar';

const Resume = () => {
    return (
        <>
           <Navbar/>
        <div className="row">
               <div className="col-md-6">
                    <div>
                        <img className='img-fluid rounded-circle' src={image} alt="" />
                        <div className="">
                            <h2><span className="text-warning">Mehedi Hassan </span></h2>
                            <a className="ml-3" target="_blank" href="https://drive.google.com/file/d/1uj1W7CduVcIUdcWmFcYcy2kj9z51lIwZ/view?usp=sharing">
                             <Button variant="outline-info"><strong>Go to my live resume</strong></Button>
                             </a>
                            <p className="text-danger">Expert in developing Single Page Application(SPA) using React.js and Node.js. I have a good knowledge in the Javascript, ES6, Bootstap-4 and also comfortable with Material UI, Express.js and MongoDB.</p>
                            <p className="text-danger">Client satisfaction is my pride. Love to develop modern and impressive websites for my clients and always responsible for the job.</p>
                        </div>
                    </div>
                </div>
          
            <div className="col-md-6">
                <img src="https://i.ibb.co/9hsSjrv/resume.png" alt="" />
                <br/>
                <img src="https://i.ibb.co/Px0V6Lq/Cresume.png" alt="" />

            </div>
            
        </div>
        <Foter/>
        </>
    );
};

export default Resume;