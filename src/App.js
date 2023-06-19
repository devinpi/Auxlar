import './App.css';
import Navigation from './components/Navigation';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      {/* <div>
        <Routes>
            <Route path='/' element={<Navigation />} />
            <Route path='/about' element={<About />} />
            <Route path='/mission' element={<Mission />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </div> */}
      <Navigation />
      <About />
      <Mission />
      <Contact />
      <Footer />
    </>
      );
 
}

export default App;
