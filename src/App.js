import React from "react";
import "./styles/App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Postlist from "./Components/body/Postlist";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import PostCreate from "./Components/body/PostCreate";
import Router from "./Components/header/Router";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header/>
          <Router/>
        </header>
          <Routes>
            <Route path="/" element={<Postlist/>}/>

            {/* Make it in ome page with /posts */}
            <Route path="/posts/new" element={<PostCreate/>}/>
            <Route path="/posts/:id" element={<Postlist/>}/>
            <Route path="/posts/delete/:id" element={<Postlist/>}/>
          </Routes>
        <footer>
          {/* <Footer/> */}
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
