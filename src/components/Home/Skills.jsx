import Container from "../Container";
import Title from "../Title";
import Skill from "./Skill";
import skillsData from "../../data";



export default function Skills(){

    return (
        <div className="py-8">
            <Title>Skills</Title>
            < Container classes='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-4'>
            {skillsData.map(item =>{

                return (<Skill key={item.id} name={item.name} image={item.image} ></Skill>) 
            }  )
            }
           
            </Container>

        </div>
    )
}