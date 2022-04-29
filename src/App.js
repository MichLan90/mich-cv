import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact />
      </Routes>
      <Hero/>
    </Router>

    </>
  );
}

export default App;
