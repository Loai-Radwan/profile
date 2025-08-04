import './App.css'
import images from './assets/imgs/page-log.png'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'


function App() {  

  return (
    <>
    <Header> </Header>   
     <Container>
     <img src={images} alt="logo" />
 
    </Container>
    <Contact >

    </Contact>

    <Footer></Footer>
   </>
  )
}

export default App
