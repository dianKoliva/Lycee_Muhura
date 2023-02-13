
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className=" font-nunito ">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Cards></Cards>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
