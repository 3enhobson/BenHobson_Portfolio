import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/home/about';
import Projects from './pages/home/projects';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
