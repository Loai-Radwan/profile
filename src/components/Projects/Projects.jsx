import Container from "../Container";
import Title from "../Title";
import Project from "./Project";
import projectsData from "../../projects-data";


export default function Projects({l}){
    


    return (
        <div className="flex-1  my-8 " >
            <Title>{l.nav.projects}</Title>
            <Container classes='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4' >
            {projectsData.map(project => <Project
             key={project[l.lang].name} name={project[l.lang].name} img={project.image} 
             imgAlt={project.imgAlt} gitLink={project.gitLink} viewLink={project.viewLink}
             tools={project.tools} l={l}
             />)}
            
            </Container>
        </div>
    )
}