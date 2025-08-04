


export default function Social({link , icon}){
    const isExternal = !link.startsWith("mailto:") && !link.startsWith("tel:");
    console.log(isExternal)

    return <div className="p-2 w-[52px] border-2 rounded-[50%] flex align-center justify-center border-[var(--border-color)] text-2xl hover:bg-[var(--border-color)] duration-300" >
        <a href={link}  
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} rel="noopener noreferrer" >{icon}</a>
    </div>
}