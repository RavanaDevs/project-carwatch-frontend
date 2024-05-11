import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Debug from './pages/Debug'
import ProfileEdit from './pages/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/debug' element={<Debug />} />
          <Route path='/profile' element={<ProfileEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
