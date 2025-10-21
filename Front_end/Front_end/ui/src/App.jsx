import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Employeelist from './Components/Employeelist.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Employeelist/>
     <h1>HELLO WORLD..!</h1>
     <Footer/>
    </>
  )
}

export default App
