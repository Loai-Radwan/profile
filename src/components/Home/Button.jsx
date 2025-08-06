

export default function Button({children,classes , ...props}){

    return <div className={`
        border-2 border-[var(--border-color)]
        rounded-[10px] p-2
     ${classes ? classes : ''}`} {...props}>
        {children}
    </div>
}