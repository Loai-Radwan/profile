import Button from "./Button";


export default function Skill({name , image}){

    return (
        <Button classes='grow basis-[200px] flex flex-col item-center'>
            <div className="grow basis-[150px] flex items-center justify-center m-2" >
                <img src={image} alt={`${name} logo`} /></div>
            
            <h3 className="text-2xl mt-4 ">{name}</h3>
        </Button>
    )
}