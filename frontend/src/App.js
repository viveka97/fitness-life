import React from 'react';
import './eshop.css';

import Footer from "./components/footer";
import WearContent from "./components/wearContent";
import Tabnavb from './components/tabs';



function App() {
  return (
    <div className="container">
      <Tabnavb/>
      <WearContent/>
      <Footer/>

    </div>
  );
}

export default App;
