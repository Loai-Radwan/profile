import { useState } from "react";
import dark from '../assets/imgs/dark.png'
import Button from "./Home/Button";

export default function Aside({lang, changeLang,  mode ,changeMode }) {
    
    const [left , setLeft] = useState('-left-52')

    function handleClick(){
        setLeft(prev => prev === '-left-52' ? 'left-0' :'-left-52'  )
    }
    let imgClass = 'cursor-pointer duration-300 '
    let barColor = mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'

    return (
        <aside className={`fixed z-1001  h-[100%] w-52 ${left} ${barColor}  duration-300`}>
            <div onClick={handleClick} className=" rounded-r-md p-2 bg-[var(--border-color)] cursor-pointer absolute -right-8 top-0 w-8 top-16 text-white">
                <i className="fa-solid fa-gear "></i>
            </div>
            <div>
                <div className="flex justify-center py-4 ">
                    {mode === 'dark' ? <i onClick={changeMode} className={`${imgClass} fa-regular fa-sun text-3xl`}></i>  : <img onClick={changeMode}  className={`w-12 ${imgClass}`} src={dark} alt="dark mode logo " />  }
                </div>
                <div className="text-center py-4" >
                    <Button onClick={changeLang} classes=' mx-3 cursor-pointer duration-300' >{lang === 'en' ? 'العربية' : 'English'}</Button>
                </div>
                
            </div>
        </aside>
    );
}
