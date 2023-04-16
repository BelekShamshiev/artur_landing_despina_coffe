import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Diskovery from "./components/Diskovery/Diskovery";
import BuildBase from "./components/BuildBase/Build";
import BestCoffee from "./components/BestCoffee/Best";
import DataSlider from "./components/DataSlider/Data";
import Client from './components/Client/Client';
import Coffeedespina from './components/Coffeedespina/Coffeedespina';
import Footer from './components/Footer/Footer';
import Burger from './components/Burger/Burger';
function App() {
  return (
    <div className="App">  
        <Burger/>
      <Hero/> 
      <Card/>
      <Diskovery/>
      <BuildBase/>
      <BestCoffee/>
      <DataSlider/>
       <Client/> 
      <Coffeedespina/>   
       <Footer/>
    </div>
  );
}

export default App;
