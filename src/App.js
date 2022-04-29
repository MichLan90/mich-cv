import './App.css';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
