import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  )
}

export default App;
