import './App.css';
import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ContactPage } from './pages/ContactPage';
import { ServicePage } from './pages/ServicePage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/services' element={<ServicePage />} />
        </Routes>
      </Router>
  );
}

export default App;
