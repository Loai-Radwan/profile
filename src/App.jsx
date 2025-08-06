import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import { useState } from 'react'
import Aside from './components/Aside'
import darkLogo from './assets/imgs/logo-dark.png'
import lightLogo from './assets/imgs/logo-light.png'
import en from './en'
import ar from './ar'

let language = {en,ar}

function App() {
  let localMode = localStorage.getItem('mode')
  let localLang = localStorage.getItem('lang')


  const [page, setPage] = useState('Home')
  const [mode, setMode] = useState(localMode || 'dark')
  const [lang, setLang] = useState(localLang || 'en')

  let logo = darkLogo
  let l = language[lang]


  if(lang === 'en'){
    localStorage.setItem('lang','en')
    document.children[0].setAttribute('lang','en')
    document.children[0].setAttribute('dir','ltr')
  } else{
    localStorage.setItem('lang','ar')
    document.children[0].setAttribute('lang','ar')
    document.children[0].setAttribute('dir','rtl')
  }

  if (mode === 'dark') {
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
  } else {
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
    document.documentElement.style.setProperty(
      "--bg-project",
      '#E9E9E9'
    );
    document.documentElement.style.setProperty(
      "--image-color",
      '#444'
    );
  }
  function handleLang() {
    setLang(prev => prev === 'en' ? 'ar' : 'en')
  }
  function handleClick(e) {
    setPage(e.target.dataset.name)
  }
  function handleMode() {
    setMode(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className='min-h-screen flex flex-col'>
      <Header l={l} logo={logo} currentPage={page} onSelect={handleClick} > </Header>
      <Aside changeLang={handleLang} lang={lang} changeMode={handleMode} mode={mode} ></Aside>
      {page === 'Home' && <Home l={l} ></Home>}
      {page === 'Projects' && <Projects l={l} ></Projects>}
      {page === 'Contact' && <Contact l={l} ></Contact>}

      <Footer l={l} logo={logo} onSelect={handleClick} ></Footer>
    </main>
  )
}

export default App
