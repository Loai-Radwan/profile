
import Button from "../Button";
import Image from "./Image";
import Container from "../Container";
import Typewriter from "./Typewriter";
import { useState } from "react";
import resume from '../../assets/resume.pdf'

export default function Landing({l}) {

    const [word, setWord] = useState({name :'' , index : 0})
    function handleFinish() {
        setWord(prev => {
            return {
                name:l.hero.words[prev.index],
                index: (prev.index + 1) % l.hero.words.length
            }
        })
    }
    return (
        <div className="  bg-linear-159 from-[var(--secondary-bg-color)]   to-[var(--main-bg-color)]
        pt-8
        " >
            <Container classes='flex justify-between flex-col md:flex-row items-center gap-6' >
                <div className="autoBlur" >
                    <h1 className="text-3xl lg:text-5xl" >{l.hero.greeting}<span className="text-[var(--border-color)]  " >{l.hero.name}</span></h1>

                    <Typewriter onFinish={handleFinish} word={word.name} ></Typewriter>

                    <a className="text-[var(--text-color)] " target="_blank" href={resume}>
                        <Button classes='group flex items-center gap-5 cursor-pointer w-fit py-2 px-4 hover:bg-[var(--border-color)] hover:scale-110 duration-300' ><span>{l.hero.getResume}</span>
                            <i className="fa-solid fa-download jump "></i> </Button></a>
                </div>


                <Image ></Image>
            </Container>




        </div>
    )
}