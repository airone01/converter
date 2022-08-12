import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App'
import './index.css'
import FileMenu from './components/FileMenu';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<></>} />
        <Route path="*" element={<>
          <h3>...and I'm converting to...</h3>
          <FileMenu layer={2} />
        </>}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
