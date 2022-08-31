import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App'
import './index.css'
import './nosites-style/index.css'
import FileMenu from './components/FileMenu';
import About from './routes/about';
import { useEffect, useState } from 'react';
import UploadButton from './components/UploadButton';
import { fileTypeFromBuffer, FileTypeResult } from 'file-type';
import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState<{ value: FileList | undefined }>({ value: undefined })

function MainApp() {
  const [files, setFiles] = useGlobalState('value');
  let filesTypes: FileTypeResult[]

  // useEffect(() => {
  //   if (files === undefined) return // type safety
  //   // TODO: handle no files
  //   filesTypes = [];
  //   (async () => {
  //     for (const file of files) {
  //       const fBuffer = await file.arrayBuffer()
  //       const fType = await fileTypeFromBuffer(fBuffer)
  //       if (fType === undefined) continue // type safety
  //       filesTypes.push(fType)
  //     }
  //   })
  // }, [setFiles])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App setFiles={setFiles} />}>
          <Route path="*" element={<>
              <h3>...and i'm converting to...</h3>
              <FileMenu layer={2} />
              <UploadButton setFiles={setFiles}/>
            </>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainApp />
)