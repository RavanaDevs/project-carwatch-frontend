import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Debug from './pages/Debug'
import ProfileEdit from './pages/Profile'
import { LeafletProvider } from '@react-leaflet/core'

function App() {
  return (
    <>
      {/* <LeafletProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/debug' element={<Debug />} />
            <Route path='/profile' element={<ProfileEdit />} />
          </Routes>
        </BrowserRouter>
      {/* </LeafletProvider> */}
    </>
  )
}

export default App
