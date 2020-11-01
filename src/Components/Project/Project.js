import React from 'react';
import   Navbar from '../Navbar/Navbar'
import ProjectCard from '../ProjectCard/ProjectCard';
import projectInfo from '../ProjectInfo';
// import FooterC from '../../Shear/FooterC/FooterC';



const Project = () => {

    return (
        <main className='container'>
            <Navbar/>
            <div className="my-5">
            {
                projectInfo.map(project => <ProjectCard key={project.id} 
                project={project}></ProjectCard>)
            }
            </div>
        </main>
    );
};

export default Project;