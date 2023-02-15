import React from "react";
import "./styles/App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import PostCreate from "./Components/body/PostCreate";
import Router from "./Components/header/Router";
import PostEdit from "./Components/body/PostEdit";
import PostOpen from "./Components/body/PostOpen";
import Feed from "./Components/body/Feed";
import Post from "./Components/body/Post";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header/>
          <Router/>
        </header>
          <Routes>
            <Route path="/" element={<Feed/>}/>
            {/* Make it in ome page with /posts */}
            <Route path="/posts/new" element={<PostCreate/>}/>
            <Route exact path="/edit/:id" element={<PostEdit/>}/>
            <Route exact path="/posts/delete/:id" element={<Feed/>}/>
            <Route exact path="/posts/:id" element={<PostOpen/>}/>
          </Routes>
        <footer>
          {/* <Footer/> */}
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
