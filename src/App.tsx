
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import LoginPage from './loginPage';
import HomePage from './components/homePage';
import Letter from './components/letter';
import Journey from './components/journey';
import Coupons from './components/coupons';
import Gallery from './components/gallery';

function App() {
  

  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/letter" element={<Letter/>} />
                <Route path="/journey" element={<Journey/>} />
                <Route path="/coupons"  element={<Coupons/>} />
                <Route path="/gallery"  element={<Gallery/>} />
                

            </Routes>
        </BrowserRouter>
    
  )
}

export default App
