import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import EmployeeList from './Components/EmployeeList.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar/>
     <h1>Hello World...!</h1>
   <EmployeeList/>
     <Footer/>
    </div>
  )
}

export default App


