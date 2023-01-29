import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home title="Home Page"/>}/>
        <Route path="/about" element={<About title="About Page"/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
