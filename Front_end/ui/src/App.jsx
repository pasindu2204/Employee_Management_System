import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import EmployeeList from './Components/EmployeeList.jsx';
import InsertEmployee from './Components/InsertEmployee.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShowEmployeeDetails from './Components/ShowEmployeeDetails.jsx';
import UpdateDetails from './Components/UpdateDetails.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element ={<EmployeeList/>} />
        <Route path = '/insert' element ={<InsertEmployee/>} />
        <Route path = '/show/:id' element ={<ShowEmployeeDetails/>} />
        <Route path = '/update/:id' element ={<UpdateDetails/>} />
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App


