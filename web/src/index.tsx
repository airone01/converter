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
import UploadButton from './components/UploadButton';
import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState<{ value: ArrayBuffer[] }>({ value: [] })

function useBytesArray() {
  const [files, setFiles] = useGlobalState('value');

  function addFile(a: ArrayBuffer) {
    if (files.length === 0) {
      setFiles([ a ])
    } else {
      const f = files
      f.push(a)
      setFiles(f)
    }
    console.log(`Buffer: ${JSON.stringify(a)}\nFiles: ${JSON.stringify(files)}`)
  }

  return [files, setFiles, addFile]
}

function MainApp() {
  const [, setFiles, addFile] = useBytesArray();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App addFile={addFile as (a: ArrayBuffer) => void} setFiles={setFiles as (a: ArrayBuffer[]) => void} />}>
          <Route path="*" element={<>
              <h3>...and i'm converting to...</h3>
              <FileMenu layer={2} />
              <UploadButton addFile={addFile as (a: ArrayBuffer) => void} setFiles={setFiles as (a: ArrayBuffer[]) => void} />
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