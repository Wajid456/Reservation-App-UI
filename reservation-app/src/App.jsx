import Footer from "./Components/Home/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Components/Pages/About"
import Contact from "./Components/Pages/Contact"
import MainList from "./Components/HotelList/MainList"
import HotelSinglePage from "./Components/HotelList/HotelSinglePage"

function App() {

  return (
    <div>

   <BrowserRouter>
    <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/mainlist" element={<MainList/>} />
  <Route path="/singlepage" element={<HotelSinglePage/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>

    

    </div>
  )
}

export default App
