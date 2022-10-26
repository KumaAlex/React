import logo from './logo.svg';
import './App.css';
import { Header } from './Components/header';
import { Content } from './Components/content';
import { Footer } from './Components/footer';
import { Navigation } from './Components/navigation';
import { Counter } from './Components/Counter';

function App() {
  const arr = [1, 2, 3, 4];
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Counter/>
      <Content arr = {arr}/>
      <Footer/>
    </div>
  );
}


export default App;
