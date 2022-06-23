import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About';
import AddBlog from './components/AddBlog';
import Bloges from './components/Bloges';
import Erorr from './pages/Erorr';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <Navbar />
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/addBlog' element={<AddBlog/>}/>
      <Route path='/blog/:id' element={<Bloges/>}/>
      <Route path='*' element={<Erorr/>}/>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
