import { useEffect, useState } from "react"


export default function Typewriter({word ,onFinish}){

    const [current,setCurrent] = useState('')
    const [index,setIndex] = useState(0)
    const [isDelete ,setIsDelete ] = useState(false)

    useEffect(() =>{
        if (!isDelete && index < word.length){
            const timeout = setTimeout(()=>{
                setCurrent(prev => prev + word[index])
                setIndex(prev => prev +1)
            } , 200)
            return ()=> clearTimeout(timeout)
        }
        if (!isDelete && index === word.length){
            let timeout= setTimeout(() => {
                 setIsDelete(true)
                 
            }, 900);

            return () => clearTimeout(timeout)
           
        }
        if (isDelete  && index > 0){
            let timeout = setTimeout(() => {
                setCurrent(prev => prev.slice(0,-1))
                setIndex(prev => prev - 1)
            }, 200);

            return ()=> clearTimeout(timeout)
        }
        if (isDelete  && index === 0){
            let timeout= setTimeout(() => {
                  onFinish()
                  setIsDelete(false)
            }, 700);

            return () => clearTimeout(timeout)
        }
    }  , [index , word , current , isDelete , onFinish])

    return(
        <h2 className="text-xl lg:text-3xl text-[var(--border-color)] mt-4 mb-8" >
            {current}
                        <span className="flash">|</span>
    </h2> 
    )
}