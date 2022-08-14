import { ReactElement } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import FileMenu from './components/FileMenu'

export default function App() {
  const path = useLocation().pathname
  const snail = path.split('/')[1]

  let element: ReactElement
  if (
    ((path !== "/about") && (snail.startsWith('a'))) ) {
    element = (<>
      <h3>my file is an...</h3>
      <FileMenu layer={1} />
    </>)
  } else if (path !== "/about") {
    element = (<>
      <h3>my file is a...</h3>
      <FileMenu layer={1} />
    </>)
  } else {
    element = (<></>)
  }

  return (
    <div className="App">
      <h1>noconverter</h1>
      {element}
      <Outlet />
      <Link to="/about" className="card">about</Link>
    </div>
  )
}