


export default function Social({link , icon,aria}){
    const isExternal = !link.startsWith("mailto:") && !link.startsWith("tel:");

    return <div className="p-2 w-[52px] border-2 rounded-[50%] flex align-center justify-center border-[var(--border-color)] text-2xl hover:bg-[var(--border-color)] hover:text-white duration-300" >
        <a href={link}  aria-label={aria} 
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} rel="noopener noreferrer" >{icon}</a>
    </div>
}