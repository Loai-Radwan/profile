import About from "./About";
import Landing from "./Landding";
import Skills from "./Skills";



export default function Home(){

    return (
        <div className="flex-1" >
            <Landing ></Landing>
            <About></About>
            <Skills ></Skills>
        </div>
    )
}