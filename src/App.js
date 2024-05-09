import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Footer from './components/Footer';
import AirFreight from './pages/AirFreight';
import OceanFreight from './pages/OceanFreight';
import BackToTop from './components/BackToTop';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        {
          loading ?
            <div className='flex w-full h-screen items-center justify-center'>
              <ClipLoader
                color={'#ff5810'}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"

              />
            </div>
            :
            <div>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/airfreight' element={<AirFreight />} />
                <Route path='/oceanfreight' element={<OceanFreight />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

              </Routes>
              <Footer />
              <BackToTop />
            </div>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
