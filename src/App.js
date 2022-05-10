import './App.css';
import Card from './components/Card';
import MainNav from './components/MainNav';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainNav/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
