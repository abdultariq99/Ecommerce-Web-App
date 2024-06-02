import './App.css';
import Hero from './components/Hero Components/Hero.js'
import Navbar from './components/Navbar Components/Navbar.js'
import Info from './components/Section 2/info-grid.js'

function App() {
  return (
    <div className="App flex flex-col h-full w-full">
      <Navbar />
      <Hero />
      <Info />
    </div>
  );
}

export default App;
