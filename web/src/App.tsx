import { createFFmpeg } from '@ffmpeg/ffmpeg'
import { ReactElement, useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import FileMenu from './components/FileMenu'
import Marble from './components/Marble'
import UploadButton from './components/UploadButton'

const ffmpeg = createFFmpeg({
  // corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js',
})

type Props = {
  addFile: (a: ArrayBuffer) => void
  setFiles: (a: ArrayBuffer[]) => void
}

export default function App({ addFile, setFiles }: Props) {
  const path = useLocation().pathname;
  const snail = path.split('/')[1];

  const [ffmpegReady, setFfmpegReady] = useState(false);
  
  // load ffmpeg (only once)
  useEffect(() => {
    // check if is already loaded
    if (ffmpeg.isLoaded()) {
      setFfmpegReady(true)
      return
    }
    // if not, load it
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
      <UploadButton addFile={addFile} setFiles={setFiles as (a: ArrayBuffer[]) => void} />
      {element}
      <Outlet />
      <div style={{ height: "1em" }} />
      <Link to="/about" className="about">about this site</Link>
    </div>
  )
}