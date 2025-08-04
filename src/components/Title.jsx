

export default function Title({children}){

    return <h2 className="poppins font-bold text-3xl text-center my-4" > 
            <span className="text-4xl" > &lt;</span>
            <span className="text-4xl" >&gt;</span> {children}
            <span className="text-4xl" >&lt;</span>/<span className="text-4xl" >&gt;</span></h2>
}