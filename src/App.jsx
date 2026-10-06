import { Routes, Route } from 'react-router-dom'
import Catalog from './components/catalog/Catalog.jsx'
import Login from './pages/login/Login.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
function App() {
  return (
    <> 
    <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    
    <Footer/>
  </>
  )

}

export default App
