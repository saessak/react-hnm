import {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css';
import ProductAll from "./page/ProductAll"
import Login from "./page/Login"
import ProductDetail from "./page/ProductDetail"
import Navbar from "./components/Navbar";

function App() {
  const[authenticate, setAuthenticate] = useState(false); //ture:로그인상태, false:로그아웃 상태

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
