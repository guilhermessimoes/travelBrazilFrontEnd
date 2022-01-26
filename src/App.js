import './App.css';
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tour from "./pages/Tour";
import ResponsiveAppBar from './components/AppBar';
//import Employees from './pages/employees/Employees';
import VerticalLinearStepper from "./pages/translado/RegisterTranslado";
import MediaCard from './pages/translado/CardTranslado';



function App() {
  return (
  <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/:id" element ={<Tour />}/>
      <Route path="/registerTranslado" element ={<VerticalLinearStepper />}/>
      <Route path="/translado" element ={<MediaCard />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
