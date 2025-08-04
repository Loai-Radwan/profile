import './App.css'
import images from './assets/imgs/page-log.png'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'


function App() {  

  return (
    <>
    <Header>

    </Header>
    <Container>
     <img src={images} alt="logo" />
 
    </Container>
    <Footer></Footer>
   </>
  )
}

export default App
