

export default function Button({children,classes , ...props}){

    return <button className={`
        border-2 border-[var(--border-color)]
        rounded-[10px] p-2
     ${classes ? classes : ''}`} {...props}>
        {children}
    </button>
}