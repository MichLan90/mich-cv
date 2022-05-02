import Hero from './Hero';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Contactme from './Contactme';
import {Route, Routes} from 'react-router-dom';

function Layout() {
    return (
        <>
        <Routes>
            <Route path="/" exact element={<Hero />}/>
            <Route path="/aboutme" exact element={<Aboutme />}/>
            <Route path="/skills" exact element={<Skills />}/>
            <Route path="/contactme" exact element={<Contactme />}/>
        </Routes>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
        </>
        
    )
}


export default Layout;