import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import './index.css'
import './nosites-style/index.css'
import FileMenu from './components/FileMenu'
import About from './routes/about'
import UploadButton from './components/UploadButton'
import { atom, PrimitiveAtom } from 'jotai'

// const fileAtom = atom([new ArrayBuffer(0)]);
const fileAtom = atom([]) as unknown as PrimitiveAtom<ArrayBuffer[]> // strict typing needed for empty arrays
const loadingAtom = atom(false)
const failedAtom = atom(false)

function MainApp (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App loadingAtom={loadingAtom} failedAtom={failedAtom} filesAtom={fileAtom} />}>
          <Route path="*" element={<>
              <h3>...and i&apos;m converting to...</h3>
              <FileMenu layer={2} />
              <UploadButton loadingAtom={loadingAtom} failedAtom={failedAtom} filesAtom={fileAtom} />
            </>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
)
