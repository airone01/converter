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

const { useGlobalState } = createGlobalState<{ value: FileList | undefined }>({ value: undefined })

function MainApp() {
  const [, setFiles] = useGlobalState('value');

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