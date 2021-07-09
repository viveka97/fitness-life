import React from 'react';
import './eshop.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


import WearContent from "./components/wearContent";
import EquipContent from "./components/equipContent";
import MainContent from "./components/mainContent";
import Tabnavb from './components/tabs';



function App() {
  return (
    <div className="body">

    <BrowserRouter>
    <Tabnavb/>

      <Switch>
      
        <Route path="/sup">
          
          <MainContent/>
        </Route>

        <Route path="/wear">
          <WearContent/>
        </Route>

        <Route path="/equip">
          <EquipContent/>
        </Route>

      </Switch>
      

    </BrowserRouter>
    </div>
  );
}

export default App;
