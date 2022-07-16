import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Players from './components/pages/Players';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   
    <BrowserRouter>
    <Header  />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route  path='/players/:team' element={<Players/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
