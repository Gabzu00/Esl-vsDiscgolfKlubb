import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banor from './pages/banor';
import Medlemskap from './pages/medlemskap';
import Login from './pages/login';
import Register from './pages/register';
import Kontakt from './pages/kontakt';
import Start from './pages/start';
import NavBar from './components/NavBar';
import Footer from './pages/footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/banor" element={<Banor />} />
        <Route path="/medlemskap" element={<Medlemskap />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
      </Routes>


      <Footer />


    </>
  )
}

export default App
