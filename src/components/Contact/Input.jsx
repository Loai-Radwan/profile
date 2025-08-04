

export default function Input({isTextarea,classes, ...props}){
    
    let classesNames = `
    bg-transparent   text-lg placeholder:text-[var(--text-color)] rounded-md border-2 border-[var(--border-color)]  px-6 py-4 tracking-wide outline-none my-4
    `


    return (
        <>  
            {isTextarea ? <textarea className={classesNames}  {...props}
             /> : <input className={`${classesNames} ${classes ? classes : ''}`}  {...props} />}  
        </>
   
    )
}