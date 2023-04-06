import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import Aheader from './Component/Aheader';
import About from './Pages/About'
import Courses from './Pages/Courses';
import Contsct from './Pages/Contsct';
import Ourteam from './Pages/Dropdown/Ourteam';
import Useffectapi from './Pages/Dropdown/Useffect&api';
import Useffectprodut from './Pages/Dropdown/Useffectprodut';
import Pagination from './Pages/Dropdown/Pagination';
import Paginationproduct from './Pages/Dropdown/Paginationproduct';
// import Classcomponent from './Pages/Dropdown/Classcomponent';
import Classupdate from './Pages/Dropdown/Classupdate';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Mainstore from './Store/store.js';
import { Provider } from 'react-redux';


function App() {
  return (
   <>
  <Router>
    
    <Provider Store={Mainstore} >
  <Aheader/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='courses' element={<Courses/>}/>
  <Route path='contact' element={<Contsct/>}/>
  <Route path='ourteam' element={<Ourteam/>}/>
  <Route path='ufa' element={<Useffectapi/>}/>
  <Route path='Useffectprodut' element={<Useffectprodut/>}/>
  <Route path='pgn' element={<Pagination/>}/>
  <Route path='Paginationproduct' element={<Paginationproduct/>}/>
  <Route path='Classupdate' element={<Classupdate/>}/>
  </Routes>
  <Footer/>
  </Provider>
  </Router>
   </>

  );
}

export default App;

