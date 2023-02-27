import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Likes from './pages/Likes'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/likes' element={<Likes />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
