import Container from "../Container";
import Title from "../Title";
import Input from "./Input";


export default function Contact({l}) {

    // const [submitState ,setSubmitState]  = useState(false)
    // const nameInput = useRef()

    // function handleClick(){
    //     setSubmitState(true)

    //     setTimeout(() => {
    //         setSubmitState(false)
    //     } , 5000)
    // }

    return (
        <div className="flex-1" >

      
        <Container >
            <Title >{l.nav.contact}</Title> 
            <form className="flex align-center flex-col" action="https://formsubmit.co/loairalshujaa@gmail.com" method="POST">

            {/* Honeypot  */}
            <input type="text" name="_honey" style={{display: 'none'}} />

            {/* Disable Captcha  */}
            <input type="hidden" name="_captcha" value='false'/>

            <input type="hidden" name="_next" value='https://loai-radwan.github.io/profile/'/>

            <input type="hidden" name="_subject" value={`New submission! from ${'unknown'}`} />


                <Input  placeholder={l.contact.inputName} type='text' name='name' />
                <Input placeholder={l.contact.inputEmail} type='email' name='email' />
                <Input placeholder={l.contact.inputMessage} isTextarea={true} name='message' />
                <button className={`hover:bg-[var(--border-color)] hover:text-white duration-300 font-bold
                    bg-transparent   text-lg placeholder:text-[var(--text-color)] rounded-md border-2 border-[var(--border-color)]  px-6 py-4 tracking-wide outline-none my-4 `}>{l.contact.sendMessage} </button>

            </form>  
            {/* {
                !submitState &&
               
            } */}
            {/* {
                submitState && <div className="my-8 text-center text-xl" >
                    Thank you for your message
                </div>
            } */}
            
                 
            
        </Container>
          </div>
    )
}