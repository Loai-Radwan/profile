import { useState } from "react";
import Container from "../Container";
import Title from "../Title";
import Input from "./Input";
import { isEmail ,isGreaterThan } from "../../util/validation";
import emailjs from '@emailjs/browser';
emailjs.init('1ts7xRMuJA_9OZl7B');


export default function Contact({l}) {
    
    const [enteredValues , setEnteredValues] = useState({
        name : '',
        email : '',
        message : ''
    })
    const [isBlur , setIsBlur] = useState({
        name : false ,
        email : false ,
        message :false ,
    })
    
    const isInvalidName =isBlur.name && !isGreaterThan(enteredValues.name , 3) 
    const isInvalidEmail =isBlur.email && !isEmail(enteredValues.email)
    const isInvalidMessage =isBlur.message && !isGreaterThan(enteredValues.message , 10)

    function handleChange(id , value){
        setEnteredValues(prev => ({
            ...prev , 
            [id]:value
        }))
        setIsBlur(prev => ({...prev , [id]:false}))
    }
    
    function handleBlue(id){
        setIsBlur(prev => ({...prev , [id] : true}))
    }

    async function handleSubmit(event){
      event.preventDefault()
        if(isInvalidEmail || isInvalidMessage || isInvalidName){
            return ;
        }
        

        const now = new Date().toLocaleString();

    // Params for your "Contact Us" email 
    const contactParams = {
      time: now,
      from_name: enteredValues.name,
      from_email: enteredValues.email,
      message: enteredValues.message,
    };

    // Params for auto-reply email
    const autoReplyParams = {
      to_name: enteredValues.name,
      to_email:enteredValues.email,
      title:l.contact.title,
      message: l.contact.respondEmail(enteredValues.name),
      time:now,
    }

    try {
      // Send Contact Us email
      await emailjs.send(
        "service_o48m1io",
        "template_576bwyj", 
        contactParams
      );

      // Send auto reply email
      await emailjs.send(
        "service_o48m1io",
        "template_9gf2q67", 
        autoReplyParams
      );

      setEnteredValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
    }
  }

 


    return (
        <div className="flex-1" >

      
        <Container >
            <Title >{l.nav.contact}</Title> 
            <form onSubmit={handleSubmit}  className="flex align-center flex-col" >

                <Input  placeholder={l.contact.inputName} onBlur={() => handleBlue('name')} invalid={isInvalidName} invalidText={l.contact.invalidName}
                onChange={(event) => handleChange('name' , event.target.value)} 
                value={enteredValues.name} type='text' name='name' required />

                <Input placeholder={l.contact.inputEmail} onBlur={() => handleBlue('email')} invalid={isInvalidEmail} invalidText={l.contact.invalidEmail}
                onChange={(event) => handleChange('email' , event.target.value)} 
                value={enteredValues.email} type='email' name='email' required />

                <Input placeholder={l.contact.inputMessage} onBlur={() => handleBlue('message')} invalid={isInvalidMessage} invalidText={l.contact.invalidMessage}
                onChange={(event) => handleChange('message' , event.target.value)} 
                value={enteredValues.message} isTextarea={true} name='message' required />

                <button className={`hover:bg-[var(--border-color)] hover:text-white duration-300 font-bold
                    bg-transparent   text-lg placeholder:text-[var(--text-color)] rounded-md border-2 border-[var(--border-color)]  px-6 py-4 tracking-wide outline-none my-4 `}>{l.contact.sendMessage} </button>

            </form>  

            
        </Container>
          </div>
    )
}
