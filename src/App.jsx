import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banor from './pages/banor';
import Medlemskap from './pages/medlemskap';
import Start from './pages/start';

function App() {

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/banor" element={<Banor />} />
        <Route path="/medlemskap" element={<Medlemskap />}></Route>
      </Routes>
    </>
  )
}

export default App
