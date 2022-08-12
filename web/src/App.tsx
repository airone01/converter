import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import FileMenu from './components/FileMenu'
import ShyButton from './components/ShyButton'
import ShyFooter from './components/ShyFooter'

export default function App() {
  return (
    <div className="App">
      <h1>noconverter</h1>
      <ShyButton />
      { useLocation().pathname !== "/about" ? (<>
        <h3>my file is a...</h3>
        <FileMenu layer={1} />
      </>) : null }
      <Outlet />
      <ShyFooter />
    </div>
  )
}