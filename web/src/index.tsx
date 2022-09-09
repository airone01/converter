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

const { useGlobalState } = createGlobalState<{ value: ArrayBuffer[] | undefined }>({ value: undefined })

function useBytesArray() {
  const [files, setFiles] = useGlobalState('value');

  function addFiles(a: ArrayBuffer) {
    const f = files as ArrayBuffer[]
    f[f.length] = a
    setFiles(f)
  }

  return [files, setFiles, addFiles]
}

function MainApp() {
  const [, , addFiles] = useBytesArray();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App addFiles={addFiles as (a: ArrayBuffer) => void} />}>
          <Route path="*" element={<>
              <h3>...and i'm converting to...</h3>
              <FileMenu layer={2} />
              <UploadButton addFiles={addFiles as (a: ArrayBuffer) => void}/>
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