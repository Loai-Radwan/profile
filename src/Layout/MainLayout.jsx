import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
// import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css' 
import Footer from '../components/Footer'
import Aside from '../components/Aside'


export default function MainLayout({l , logo , handleLang , handleMode , mode}) {
  return (
    <>
    <Header l={l} logo={logo}  ></Header>
    <Aside changeLang={handleLang} lang={l} changeMode={handleMode} mode={mode} ></Aside>

    <Outlet/>
    {/* <ToastContainer/> */}
    <Footer logo={logo} l={l} ></Footer>    


    </>
  )
}
