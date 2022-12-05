import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Navigation } from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import { AboutUs } from "./Pages/AboutUs";
import { Movies } from "./Pages/Movies";
import { Premieres } from "./Pages/Premieres";
import { Browse } from "./Pages/Browse";
import MovieDetailPage from "./Pages/MovieDetailPage";
import NotFound from "./Pages/NotFound";
import { BaseApiValueContext } from "./Context/BaseApiValueContext";
import { useState } from "react";

function App() {
  const [movieApi] = useState("https://api.themoviedb.org/3/movie");
  const [searchApi] = useState("https://api.themoviedb.org/3/search/movie");
  const [genreApi] = useState("https://api.themoviedb.org/3/genre/movie/list");
  const [discoverApi] = useState("https://api.themoviedb.org/3/discover/movie");

  return (
    <>
      <div className="App">
        <BaseApiValueContext.Provider
          value={{
            movieApi,
            searchApi,
            genreApi,
            discoverApi,
          }}
        >
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
            <Route path="/premieres" element={<Premieres />}></Route>
            {/*<Route path="/profile" element={<Profile />}></Route>*/}
            <Route path="/browse" element={<Browse />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          <Footer />
        </BaseApiValueContext.Provider>
      </div>
    </>
  );
}

export default App;
