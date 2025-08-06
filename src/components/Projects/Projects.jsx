import Container from "../Container";
import Title from "../Title";
import Project from "./Project";
import projectsData from "../../projects-data";


export default function Projects(){

    return (
        <div className="flex-1 text-center my-8 " >
            <Title>Projects</Title>
            <Container classes='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4' >
            {projectsData.map(project => <Project
             key={project.name} name={project.name} img={project.image} 
             imgAlt={project.imgAlt} gitLink={project.gitLink} viewLink={project.viewLink}
             tools={project.tools}
             />)}
            
            </Container>
        </div>
    )
}