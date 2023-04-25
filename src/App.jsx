import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banor from './pages/banor';
import Medlemskap from './pages/medlemskap';
import Login from './pages/login';
import Start from './pages/start';
import NavBar from './components/NavBar';
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
      </Routes>
    </>
  )
}

export default App
