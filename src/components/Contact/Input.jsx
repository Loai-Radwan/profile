

export default function Input({  isTextarea , invalid   ,invalidText,classes, ...props}){
    
    let classesNames = `
      bg-transparent text-lg placeholder:text-[var(--text-color)] rounded-md border-2 
      px-6 py-4 tracking-wide outline-none my-4 text-center focus:placeholder:text-transparent placeholder:duration-300 placeholder:text-lg 
      ${invalid ? ' border-red-500 shadow-md shadow-red-500' : '  border-[var(--border-color)] '}
       
    `


    return (
        <div className="flex flex-col autoShow">  
            {isTextarea ? <textarea className={classesNames}  {...props}
             /> : <input  className={`${classesNames} ${classes ? classes : ''}`}  {...props} />}  
             <div className="h-4" >
                {invalid && <p className="text-red-500" >{invalidText}</p>}
                
             </div>
        </div>
   
    )
}