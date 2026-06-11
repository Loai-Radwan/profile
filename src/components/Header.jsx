import Container from './Container'
import {NavLink} from 'react-router-dom'


export default function Header({logo , l}) {

    const linkClasses = `duration-300 cursor-pointer hover:text-[var(--border-color)] text-sm md:text-xl md:mx-2 `

    return (
        <header className="font-inter bg-[var(--secondary-bg-color)] h-16 w-full sticky left-0 top-0 z-1000 ">
            <Container classes="flex justify-between p-4 " data-name='test'>
                <div className="logo">
                    <a href="https://loai-radwan.github.io/profile/"><img className='h-8' src={logo} alt="logo" /></a>
                    
                </div>
                <ul className="links flex gap-4 ">
                    <NavLink to='/'  className={({isActive}) => isActive ? `text-[var(--border-color)] ${linkClasses} ` : linkClasses}  >{l.nav.home}</NavLink>
                    <NavLink to='/projects'  className={({isActive}) => isActive ? `text-[var(--border-color)] ${linkClasses} ` : linkClasses}  >{l.nav.projects}</NavLink>
                    <NavLink to='/contact'  className={({isActive}) => isActive ? `text-[var(--border-color)] ${linkClasses} ` : linkClasses}  >{l.nav.contact}</NavLink>
                </ul>
            </Container>

        </header>
    )
}
