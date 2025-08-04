

export default function Container({ children,classes, ...props }) {

    return <div  className={` px-4 mx-auto w-full md:w-[750px] lg:w-[1000px] xl:w-[1260px] 2xl:w-[1520px] ${classes ? classes : ''}`} {...props}>
        {children}
    </div>
}