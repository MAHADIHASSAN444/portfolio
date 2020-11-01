import React from 'react';
import { Carousel,} from 'react-bootstrap';
import './ProjectCard.css';
import Navbar from '../Navbar/Navbar'

const ProjectCard = (props) => {
    const { title, description, technology, img_1, img_2, img_3, liveSite, clientGithub, serverGithub } = props.project;

    return (
        <section className="row projectCard p-5">
            <div className="col-md-6 d-flex flex-column justify-content-around">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='row'>
                    {
                        technology.map(tech => {
                            return <div key={tech} className='skill'>
                                <span>{tech}</span>
                            </div>
                        })
                    }
                </div>
                <div className="my-3 d-flex justify-content-around ">
                    <div className=""><a href={liveSite}><h6 className="text-warning">WebSite</h6></a></div>
                    <div className=""><a href={clientGithub}><h6 className="text-warning">Client Github</h6></a></div>
                    <div className=""><a href={serverGithub}><h6 className="text-warning">Server Github</h6></a></div>
                </div>
            </div>
            <div className="col-md-6 my-3">
                <Carousel >
                    <Carousel.Item>
                        <img style={{ maxWidth: '100%', maxHeight: '50%' }} src={img_1} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ maxWidth: '100%', maxHeight: '50%' }} src={img_2} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ maxWidth: '100%', maxHeight: '50%' }} src={img_3} alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default ProjectCard;