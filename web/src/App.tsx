import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import { ReactElement, useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import FileMenu from './components/FileMenu'
import Marble from './components/Marble'

const ffmpeg = createFFmpeg({
  corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js',
  log: import.meta.env.DEV // only in vite dev mode
})

export default function App() {
  const path = useLocation().pathname;
  const snail = path.split('/')[1];

  const [ffmpegReady, setFfmpegReady] = useState(false);
  
  // load ffmpeg (only once)
  useEffect(() => {
    (async () => {
      await ffmpeg.load();
      setFfmpegReady(true);
    })()
  }, [])

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
      <div className='marble-pack'>
        <Marble on={ffmpegReady} title="ffmpeg"/>
      </div>
      <h1 className="app-title">noconverter</h1>
      {element}
      <Outlet />
      <Link to="/about" className="card">about</Link>
    </div>
  )
}