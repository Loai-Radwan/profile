import Container from "../Container";
import Title from "../Title";
import Skill from "./Skill";
// import skillsData from "../../data";



export default function Skills({l}){

    return (
        <div className="py-8">
            <Title>{l.skills.title}</Title>
            < Container classes='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-4'>
            {l.skills.skillsData.map(item =>{

                return (<Skill l={l} key={item.id} name={item.name} image={item.image} ></Skill>) 
            }  )
            }
           
            </Container>

        </div>
    )
}