
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import About from './About'
import Service from './Service'
import Error from './Error'

function App() {
  return (
    <div className="App">
      <h1>Learning Router</h1>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route element={<Error/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
