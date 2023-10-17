
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Shared/NavBar'

function App() {


  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
