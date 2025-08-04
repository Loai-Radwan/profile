import logo from '../assets/imgs/logo-dark.png'
import Container from './Container'
import Social from './Social'

const date = new Date().getFullYear()

export default function Footer() {

    return <footer className='bg-[var(--secondary-bg-color)]' >
        <Container classes='flex justify-between gap-4 flex-col md:flex-row pb-3 border-b-2 border-stone-500  p-4' >
            <div  >
                <img className='h-8' src={logo} alt="logo" />
                <p className='w-full md:w-[50%] text-[var(--secondary-color)] mt-2' >Always learning, always building — exploring modern web technologies one project at a time.</p>

                <p className='mt-2' > <i className="fa-solid fa-envelope mr-3"></i> loairalshujaa@gmail.com </p>
                <p className='mt-2' ><i className="fa-solid fa-phone-volume mr-3"></i>  +447778792220</p>
            </div>
            <div>
                <ul>
                    <p className='font-bold text-xl' > Quick Links </p>
                    <li className='mt-2 pl-2' data-name='home' >Home</li> 
                    <li className='mt-2 pl-2' data-name='projects' >Projects</li>
                    <li className='mt-2 pl-2' data-name='contact' >Contact Me</li>
                </ul>
                <div className="social flex gap-2 mt-3">
                    <Social link="https://github.com/Loai-Radwan" 
                    icon={<i className="fa-brands fa-github"></i>} ></Social>

                    <Social link="https://www.linkedin.com/in/loai-alshujaa-a81997363/" icon={ <i className="fa-brands fa-linkedin-in"></i>} ></Social>

                    <Social link="mailto:loairalshujaa@gmail.com" icon={<i className="fa-solid fa-envelope"></i>}></Social>

                    <Social link="https://wa.me/447778792220" icon={<i className="fa-brands fa-whatsapp"></i>} ></Social>

     
                    <div className='whatsApp ' >
                        <a href="" target='_blank'>

                        </a>
                    </div>
                </div>
            </div>
        </Container>
        <p className='text-center mt-2' >&copy; {date} All rights reserved </p>
    </footer>
}