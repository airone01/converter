import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App'
import './index.css'
import FileMenu from './components/FileMenu';
import About from './routes/about';
import { useState } from 'react';
import UploadButton from './components/UploadButton';

function MainApp() {
  const [file, setFile] = useState<FileList>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<App setFile={setFile} />}>
          <Route path="*" element={<>
              <h3>...and i'm converting to...</h3>
              <FileMenu layer={2} />
              <UploadButton setFile={setFile}/>
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