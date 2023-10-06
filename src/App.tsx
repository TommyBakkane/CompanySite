import './App.css';
import { About } from './components/About';
import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
  );
}

export default App;
