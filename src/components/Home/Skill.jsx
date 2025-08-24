import Button from "../Button";


export default function Skill({name , image ,l}){

    const learning = <span className="text-xs text-[var(--text-color)]/80 mx-2" >{l.skills.currentlyLearning}</span>

    return (
        <Button classes='grid-col-1 flex flex-col item-center hover:scale-105 duration-300 my-4 fadeInLeft'>
            <div className="grow basis-[150px] flex items-center justify-center m-2" >
                <img src={image} loading="lazy" alt={`${name} logo`} /></div>
            
            <h3 className="text-2xl pt-4 flex items-center justify-center ">{name} {name === 'React' && learning} </h3>
        </Button>
    )
}