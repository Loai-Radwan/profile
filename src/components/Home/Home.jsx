import About from "./About";
import Landing from "./Landing";
import Skills from "./Skills";



export default function Home({l}){

    return (
        <div className="flex-1" >
            <Landing l={l} ></Landing>
            <About l={l} ></About>
            <Skills l={l} ></Skills>
        </div>
    )
}