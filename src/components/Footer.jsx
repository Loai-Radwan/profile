
import Container from './Container'
import Social from './Social'

const date = new Date().getFullYear()

export default function Footer({logo,onSelect, l}) {

    return <footer className='bg-[var(--secondary-bg-color)] ' >
        <Container classes='flex justify-between gap-4 flex-col md:flex-row pb-3 border-b-2 border-[var(--border-color)]  p-4' >
            <div  >
                <img className='h-8' src={logo} alt="logo" />
                <p className='w-full md:w-[50%] text-[var(--secondary-color)] mt-2' >{l.footer.quote}</p>

                <p className='mt-2' > <i className="fa-solid fa-envelope mr-3"></i> loairalshujaa@gmail.com </p>
                <p className='mt-2' ><i className="fa-solid fa-phone-volume mr-3"></i>  +447778792220</p>
            </div>
            <div>
                    <p className='font-bold text-xl' > {l.footer.quickLinks}</p>
                <ul>
                    <li onClick={onSelect} className='mt-2 pl-2 cursor-pointer' data-name='Home' >{l.nav.home}</li> 
                    <li onClick={onSelect} className='mt-2 pl-2 cursor-pointer' data-name='Projects' >{l.nav.projects}</li>
                    <li onClick={onSelect} className='mt-2 pl-2 cursor-pointer' data-name='Contact' >{l.nav.contact}</li>
                </ul>
                <div className="social flex gap-2 mt-3">
                    <Social link="https://github.com/Loai-Radwan"  aria='visit me GitHub '
                    icon={<i className="fa-brands fa-github"></i>} ></Social>

                    <Social link="https://www.linkedin.com/in/loai-alshujaa-a81997363/" aria='visit me Linkedin account' icon={ <i className="fa-brands fa-linkedin-in"></i>} ></Social>

                    <Social link="mailto:loairalshujaa@gmail.com" aria='email' icon={<i className="fa-solid fa-envelope"></i>}></Social>

                    <Social link="https://wa.me/447778792220" aria='whatsApp' icon={<i className="fa-brands fa-whatsapp"></i>} ></Social>

                </div>
            </div>
        </Container>
        <p className='text-center mt-2' >&copy; {date} {l.footer.copyright} </p>
    </footer>
}