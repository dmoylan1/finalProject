import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Pricing from './pages/Pricing';
import Error from './pages/Error';
import NavBar from './components/NavBar';

function App() {

  return (
      <Router>
      <NavBar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/reviews' element={<Reviews/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
  );
}

export default App;
