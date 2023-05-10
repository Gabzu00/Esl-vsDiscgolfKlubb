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
import Admin from './pages/admin';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>

      <div className='page-container'>
        <div className='content-wrap'>
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
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>


          <Footer />

        </div>
      </div>
    </>
  )
}

export default App
