import { useRef, useState } from "react";
import Container from "../Container";
import Title from "../Title";
import Input from "./Input";


export default function Contact() {

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
            <Title >Contact Me</Title> 
            <form className="flex align-center flex-col" action="https://formsubmit.co/loairalshujaa@gmail.com" method="POST">

            {/* Honeypot  */}
            <input type="text" name="_honey" style={{display: 'none'}} />

            {/* Disable Captcha  */}
            <input type="hidden" name="_captcha" value='false'/>

            <input type="hidden" name="_next" value='https://loai-radwan.github.io/profile/'/>

            <input type="hidden" name="_subject" value={`New submission! from ${'unknown'}`} />


                <Input  placeholder='Enter Your Name' type='text' name='name' />
                <Input placeholder='Enter Your Email' type='email' name='email' />
                <Input placeholder='Enter Your Message' isTextarea={true} name='message' />
                <Input  value='Send Message' type='Submit' classes=' hover:bg-[var(--border-color)] duration-300 font-bold '/>

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