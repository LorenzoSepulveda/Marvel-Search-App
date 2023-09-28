import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
//import About from './routes/About';
import Navbar from './components/Navbar';
import HeroDetails from './routes/HeroDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>

        {/*<Route path={'about'} element={<About/>}/>*/}

        <Route path={"/:id"} element={<HeroDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
