
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';

function App() {
  return (
<div className="App">
<div className="container">
   
  <Header/>

     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
     </Routes>
    </div>
</div>
  );
}

export default App;
