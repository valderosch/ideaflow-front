import React from "react";
import "./styles/App.css"
import Postlist from "./Components/body/Postlist";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Router from "./Components/header/Router";


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <Postlist/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
