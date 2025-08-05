import './App.css'
// import images from './assets/imgs/page-log.png'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import { useState } from 'react'


function App() {  
  const [page , setPage] = useState('Home')



  function handleClick(e){
    setPage(e.target.dataset.name)
    console.log(e.target.dataset.name)
  }

  return (
    <>
    <Header currentPage={page} onSelect={handleClick} > </Header>   
     <Container>
     {/* <img src={images} alt="logo" /> */}
 
    </Container>
    {page === 'Home' && <Home ></Home>}
    {page === 'Projects' && <Projects ></Projects>}
    {page === 'Contact' && <Contact ></Contact>}

    <Footer onSelect={handleClick} ></Footer>
   </>
  )
}

export default App
