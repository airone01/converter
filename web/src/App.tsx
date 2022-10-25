import { createFFmpeg } from '@ffmpeg/ffmpeg'
import { PrimitiveAtom } from 'jotai'
import { ReactElement, useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import FileMenu from './components/FileMenu'
import Marble from './components/Marble'
import UploadButton from './components/UploadButton'

const ffmpeg = createFFmpeg({
  // corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js',
})

type Props = {
  filesAtom: PrimitiveAtom<ArrayBuffer[]>
  loadingAtom: PrimitiveAtom<boolean>
  failedAtom: PrimitiveAtom<boolean>
}

export default function App({ filesAtom, loadingAtom, failedAtom }: Props) {
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
    ((path !== '/about') && (snail.startsWith('a'))) ) {
    element = (<>
      <h3>my file is an...</h3>
      <FileMenu layer={1} />
    </>)
  } else if (path !== '/about') {
    element = (<>
      <h3>my file is a...</h3>
      <FileMenu layer={1} />
    </>)
  } else {
    element = (<></>)
  }

  return (
    <div className='App'>
      <div className='
        w-fit
        flex flex-col items-center justify-center
        px-8 mb-2
        mx-auto
       bg-slate-800 dark:bg-white
        rounded-3xl
      '>
        <Marble on={ffmpegReady} title='ffmpeg'/>
        <h1 className='m-0 border-0 bg-inherit text-white dark:text-gray-800 lowercase'>NoConverter</h1>
      </div>
      <UploadButton loadingAtom={loadingAtom} failedAtom={failedAtom} filesAtom={filesAtom} />
      {element}
      <Outlet />
      <div className='h-4' />
      <Link to='/about' className='font-bold'>about this site</Link>
    </div>
  )
}
