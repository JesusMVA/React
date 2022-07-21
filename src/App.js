
import './App.css';
import NavScrollExample from './components/NavbarApp/NavbarApp';
import CarouselFadeExample from './components/SliderApp/SliderApp';
import TextApp from './components/TextApp/TextApp';
import GroupExample from './components/CardApp/CardApp';
import FooterApp from './components/FooterApp/FooterApp';


function App() {
  return (
    <div className="App">
    <NavScrollExample/>
    <CarouselFadeExample/>
    <TextApp/>
    <GroupExample/>
    <FooterApp/>
    </div>
  );
}

export default App;
