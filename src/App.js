import React from "react";
import Header from "./featured/header/Headerr.jsx";
import Footer from "./featured/footer/Footerr.jsx";
import Main from "./featured/main/Mainn.jsx"
import Sponsored from './components/Sponsored/Sponsored.jsx'
import Cards from './components/Cards/Cards.jsx'
import Featured from './components/Featured/Featured.jsx'



function App() {
  return (
    <div>
      <Header />
      <Main />
      <Sponsored />
      <Cards />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
