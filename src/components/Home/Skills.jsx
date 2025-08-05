import Container from "../Container";
import Title from "../Title";
import Skill from "./Skill";
import skillsData from "../../data";



export default function Skills(){

    return (
        <div className="py-8">
            <Title>Skills</Title>
            < Container classes='flex flex-wrap gap-8 pt-4'>
            {skillsData.map(item =>{

                return (<Skill key={item.id} name={item.name} image={item.image} ></Skill>) 
            }  )
            }
           
            </Container>

        </div>
    )
}