import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Navigation } from './Components/navigation';
import { Route, Routes } from "react-router-dom";
import {Main} from "./Pages/Main";
import {AboutUs} from "./Pages/AboutUs";
import {Movies} from "./Pages/Movies";
import {Premieres} from "./Pages/Premieres";
import {Profile} from "./Pages/Profile";
import {Browse} from "./Pages/Browse";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/premieres" element={<Premieres/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/browse" element={<Browse/>}></Route>
        </Routes>

        <Footer/>


      </div>

    </>

  );
}


export default App;
