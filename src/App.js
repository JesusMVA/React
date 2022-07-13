
import './App.css';
import NavScrollExample from './components/NavbarApp/NavbarApp';
import CarouselFadeExample from './components/SliderApp/SliderApp';
import TextApp from './components/TextApp/TextApp';
import GroupExample from './components/CardApp/CardApp'


function App() {
  return (
    <div className="App">
    <NavScrollExample/>
    <CarouselFadeExample/>
    <TextApp/>
    <GroupExample/>
    </div>
  );
}

export default App;
