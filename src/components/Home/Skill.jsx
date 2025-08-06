import Button from "./Button";


export default function Skill({name , image}){

    const learning = <span className="text-xs text-[var(--secondary-color)] ml-2" >Currently Learning</span>

    return (
        <Button classes='grid-col-1 flex flex-col item-center'>
            <div className="grow basis-[150px] flex items-center justify-center m-2" >
                <img src={image} alt={`${name} logo`} /></div>
            
            <h3 className="text-2xl pt-4 flex items-center justify-center ">{name} {name === 'React' && learning} </h3>
        </Button>
    )
}