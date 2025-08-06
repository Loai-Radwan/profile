import Button from "../Home/Button";



export default function Project({name ,img  ,imgAlt, gitLink , viewLink , tools ,l }){

    return(
        <div className="bg-[var(--bg-project)] rounded flex flex-col ">
            <div className="group image grow basis-[200px] relative overflow-hidden  ">
                <img className="object-contain " loading="lazy" src={img} alt={imgAlt} />
                <div className="info absolute bottom-[-100%] group-hover:bottom-0 w-full duration-500 p-2 bg-[var(--main-bg-color)]/50">
                    <h3 className=" text-lg mb-2 " >{name}</h3>
                    <div className="flex items-center gap-3 " >
                        {tools.map(tool => <Button key={tool} classes='py-0 px-2 text-sm ' >{tool}</Button>)}
                        
                    </div>
                </div>
            </div>

            <div className="flex gap-5 items-center justify-evenly py-8">
                <a href={gitLink} target="_blank" aria-label="see code in GitHub">
                     <Button  classes='py-2 px-4 hover:bg-[var(--border-color)] duration-300 cursor-pointer hover:text-white'>
                    <i className="fa-brands fa-github"></i>
                    <span className="mx-2" >{l.projects.github}</span>
                </Button>
                </a>
                <a href={viewLink} target="_blank" aria-label="visit page">
                     <Button  classes='py-2 px-4 hover:bg-[var(--border-color)] duration-300 cursor-pointer hover:text-white'>
                    <i className="fa-regular fa-eye"></i>
                    <span className="mx-2" >{l.projects.view}</span>
                </Button>
                </a>
               
               
            </div>
        </div>
    )
}