import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useState } from 'react';
import { Allroutes } from './components/Routes/Allroutes';
import Nav from './components/Navbar/navbar';
const Authenticate = async()=>{
  const token = localStorage.getItem("userToken") || ""
  axios.defaults.headers.common['Authorization'] = `${token}`;
}
export default function App() {
  useState(()=>{
    Authenticate()
  },[])
  return (
    <div className="App">
      <Nav/>
      <Allroutes/>
    </div>
  );
}
