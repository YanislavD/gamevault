import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

import Home from './pages/home/Home.jsx'
import Catalog from './pages/catalog/Catalog.jsx'
import Details from './pages/details/Details.jsx'
import Create from './pages/create/Create.jsx'
import Edit from './pages/edit/Edit.jsx'
import Profile from './pages/profile/Profile.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import NotFound from './pages/not-found/NotFound.jsx'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/add" element={<Create />} />
        <Route path="/games/:gameId" element={<Details />} />
        <Route path="/games/:gameId/edit" element={<Edit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
