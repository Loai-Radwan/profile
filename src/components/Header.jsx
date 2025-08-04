import logo from '../assets/imgs/logo-dark.png'
import Container from './Container'

export default function Header() {

    return (
        <header className="bg-[var(--secondary-bg-color)] w-full p-4 fixed top-0 ">
            <Container classes="flex justify-between" data-name='test'>
                <div className="logo">
                    <img className='h-8' src={logo} alt="" />
                </div>
                <ul className="links flex gap-4 ">
                    <li className={`text-[var(--secondary-color)] duration-300 cursor-pointer hover:text-[var(--text-color)] `}  >Home</li>
                    <li className={`text-[var(--secondary-color)] duration-300 cursor-pointer hover:text-[var(--text-color)] `}  >Projects</li>
                    <li className={`text-[var(--secondary-color)] duration-300 cursor-pointer hover:text-[var(--text-color)] `}  >Contact Me</li>
                </ul>
            </Container>

        </header>
    )
}
