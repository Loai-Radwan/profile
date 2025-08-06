import Container from './Container'

export default function Header({onSelect,currentPage,logo}) {

    return (
        <header className="font-inter bg-[var(--secondary-bg-color)] h-16 w-full sticky left-0 top-0 z-1000 ">
            <Container classes="flex justify-between p-4 " data-name='test'>
                <div className="logo">
                    <img className='h-8' src={logo} alt="" />
                </div>
                <ul className="links flex gap-4 ">
                    <li onClick={onSelect} data-name='Home' className={`text-[var(--secondary-color)] duration-300 cursor-pointer hover:text-[var(--text-color)]  ${currentPage === 'Home' ? 'text-[var(--text-color)]' :''}`}  >Home</li>
                    <li onClick={onSelect} data-name='Projects' className={`text-[var(--secondary-color)] duration-300 cursor-pointer hover:text-[var(--text-color)] ${currentPage === 'Projects' ? 'text-[var(--text-color)]' :''}`}  >Projects</li>
                    <li onClick={onSelect} data-name='Contact' className={`text-[var(--secondary-color)] duration-300 cursor-pointer hover:text-[var(--text-color)] ${currentPage === 'Contact' ? 'text-[var(--text-color)]' :''}`}  >Contact Me</li>
                </ul>
            </Container>

        </header>
    )
}
