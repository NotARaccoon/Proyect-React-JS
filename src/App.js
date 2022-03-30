import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemList from './Components/ItemList/ItemList';
import Gallery from './Components/Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return ( 
      <div className = "App" >
        <Navbar></Navbar>
        <ItemList tittle='Gallery'></ItemList>
        <Gallery></Gallery>
      </div>
    );
}
/* 
const Home = () => {
  return(
    
  )
}
 */
export default App;