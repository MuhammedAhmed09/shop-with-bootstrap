import { useEffect, useState } from "react"
import Loading from "./Loading/Loading";
import Home from "./Home/Home";
import NavbarTop from "./NavbarTop/NavbarTop";
import NewProducts from "./NewProducts/NewProducts";
import Gallary from "./gallary/Gallary";
import PopularItem from "./PopularItem/PopularItem";
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import ChoceWatch from "./ChoceWatch/ChoceWatch";
import Footer from "./footer/Footer";






const App = () => {
  const [ loading, setLoading] = useState();

  useEffect( () => {

    setLoading(true);

    setTimeout( () => {
      setLoading(false)
    } , 3000)
  }, []);



  return (
    <>
      { loading ? <Loading/> 
      
      : 
      
      <>
      <NavbarTop/>
      <Home/>
      <NewProducts/>
      <Gallary/>
      <PopularItem/>
      <ChoceWatch/>
      <Footer/>
      </>
      
      }
    </>
  )
}

export default App
