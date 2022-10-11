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
import { atom, PrimitiveAtom } from 'jotai'

// const fileAtom = atom([new ArrayBuffer(0)]);
const fileAtom = atom([]) as unknown as PrimitiveAtom<ArrayBuffer[]>;

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App atom={fileAtom} />}>
          <Route path="*" element={<>
              <h3>...and i'm converting to...</h3>
              <FileMenu layer={2} />
              {/* <UploadButton atom={fileAtom} /> */}
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