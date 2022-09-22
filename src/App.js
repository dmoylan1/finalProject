import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Error from './pages/Error';
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
      <NavBar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}>
            <Route path=':something' element={<About/>}/>
            </Route>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
  );
}

export default App;
