import './App.css'
// import images from './assets/imgs/page-log.png'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import { useState } from 'react'
import Aside from './components/Aside'
import darkLogo from './assets/imgs/logo-dark.png'
import lightLogo from './assets/imgs/logo-light.png'


function App() {  
  let localMode = localStorage.getItem('mode')

  const [page , setPage] = useState('Home')
  const [mode , setMode] = useState(localMode || 'dark')

  let logo = darkLogo




if(mode === 'dark'){
  logo = darkLogo
  localStorage.setItem("mode", 'dark')
    document.documentElement.style.setProperty(
            "--main-bg-color",
            '#182848'
        );
    document.documentElement.style.setProperty(
            "--secondary-bg-color",
            '#161D27'
        );
    document.documentElement.style.setProperty(
            "--text-color",
            '#FFFFFF'
        );
            document.documentElement.style.setProperty(
            "--border-color",
            '#0092B8'
        );


    document.documentElement.style.setProperty(
            "--bg-project",
            '#374151'
        );
    document.documentElement.style.setProperty(
            "--image-color",
            '#288198'
        );

}else{
  localStorage.setItem("mode", 'light')
  logo = lightLogo
    document.documentElement.style.setProperty(
            "--main-bg-color",
            '#FFFCFB'
        );
    document.documentElement.style.setProperty(
            "--secondary-bg-color",
            '#F2F2F2'
        );
    document.documentElement.style.setProperty(
            "--text-color",
            '#182848'
        );

    // document.documentElement.style.setProperty(
    //         "--border-color",
    //         '#374151'
    //     );
    document.documentElement.style.setProperty(
            "--bg-project",
            '#E9E9E9'
        );
    document.documentElement.style.setProperty(
            "--image-color",
            '#000'
        );
      }


  function handleClick(e){
    setPage(e.target.dataset.name)
  }
  function handleMode(){
    setMode(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className='min-h-screen'>
    <Header logo={logo} currentPage={page} onSelect={handleClick} > </Header>   
    <Aside changeMode={handleMode} mode={mode} ></Aside>
    {page === 'Home' && <Home ></Home>}
    {page === 'Projects' && <Projects ></Projects>}
    {page === 'Contact' && <Contact ></Contact>}

    <Footer logo={logo} onSelect={handleClick} ></Footer>
   </main>
  )
}

export default App
