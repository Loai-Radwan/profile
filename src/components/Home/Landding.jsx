
import Button from "./Button";
import Image from "./Image";
import Container from "../Container";
import Typewriter from "./Typewriter";
import { useState } from "react";

export default function Landing() {
    const words = [
        "Front-End Developer",
        "Creative Coder",
        "Fast Learner",
        "Passionate Programmer",
        "Problem Solver",
        "Lifelong Learner",
    ];
    const [word, setWord] = useState({name :'' , index : 0})
    function handleFinish() {
        setWord(prev => {
            return {
                name:words[prev.index],
                index: (prev.index + 1) % words.length
            }
        })
    }
    return (
        <div className="  bg-linear-159 from-[var(--secondary-bg-color)]   to-[var(--main-bg-color)]
        pt-8
        " >
            <Container classes='flex justify-between flex-col md:flex-row items-center gap-6' >
                <div>
                    <h1 className="text-3xl lg:text-5xl" >Hello, I am <span className="text-[var(--border-color)] " >Loai</span></h1>

                    <Typewriter onFinish={handleFinish} word={word.name} ></Typewriter>

                    <a className="text-[var(--text-color)] " target="_blank" href="https://drive.google.com/file/d/1Ur7gS5OX60PGd1ouokoSGn71v6FB1jXr/view?usp=sharing">
                        <Button classes='flex items-center gap-5 cursor-pointer w-fit py-2 px-4' ><span>Get Resume</span>
                            <i className="fa-solid fa-download "></i> </Button></a>
                </div>


                <Image ></Image>
            </Container>




        </div>
    )
}