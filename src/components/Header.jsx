import Container from './Container'

export default function Header({onSelect,currentPage,logo , l}) {

    return (
        <header className="font-inter bg-[var(--secondary-bg-color)] h-16 w-full sticky left-0 top-0 z-1000 ">
            <Container classes="flex justify-between p-4 " data-name='test'>
                <div className="logo">
                    <img className='h-8' src={logo} alt="" />
                </div>
                <ul className="links flex gap-4 ">
                    <li onClick={onSelect} data-name='Home' className={` duration-300 cursor-pointer hover:text-[var(--border-color)] text-sm md:text-xl md:mx-2  ${currentPage === 'Home' ? ' text-[var(--border-color)]' :''}`}  >{l.nav.home}</li>
                    <li onClick={onSelect} data-name='Projects' className={` duration-300 cursor-pointer hover:text-[var(--border-color)] text-sm md:text-xl md:mx-2 ${currentPage === 'Projects' ? ' text-[var(--border-color)]' :''}`}  >{l.nav.projects}</li>
                    <li onClick={onSelect} data-name='Contact' className={` duration-300 cursor-pointer hover:text-[var(--border-color)] text-sm md:text-xl md:mx-2 ${currentPage === 'Contact' ? ' text-[var(--border-color)]' :''}`}  >{l.nav.contact}</li>
                </ul>
            </Container>

        </header>
    )
}
