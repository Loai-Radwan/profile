import { useState } from "react";
import dark from '../assets/imgs/dark.svg'
import light from '../assets/imgs/light.svg'

export default function Aside({ mode ,changeMode }) {

    const [left , setLeft] = useState('-left-52')

    function handleClick(){
        setLeft(prev => prev === '-left-52' ? 'left-0' :'-left-52'  )
    }
    let imgClass = 'cursor-pointer duration-300'

    return (
        <aside className={`fixed z-1001  h-screen w-52 ${left}   bg-linear-159 from-[var(--secondary-bg-color)]   to-[var(--main-bg-color)] duration-300`}>
            <div onClick={handleClick} className=" rounded-r-md p-2 bg-[var(--border-color)] cursor-pointer absolute -right-8 top-0 w-8 top-16 text-white">
                <i className="fa-solid fa-gear "></i>
            </div>
            <div>
                <div className="flex justify-center py-4">
                    {mode === 'dark' ? <img onClick={changeMode}  className={imgClass} src={dark} alt="dark mode logo" /> : <img onClick={changeMode} className={imgClass} src={light} alt="dark mode logo" />}
                </div>
                
            </div>
        </aside>
    );
}
