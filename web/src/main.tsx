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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="/" element={<App />}>
        <Route path="*" element={<>
          <h3>...and i'm converting to...</h3>
          <FileMenu layer={2} />
        </>}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)