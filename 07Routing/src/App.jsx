import { useState } from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Router>
      <Route path="/"element={<Home/>}></Route>
    </Router>
    <h1>Hello ji</h1>
    <Footer/>
    </>
  )
}

export default App