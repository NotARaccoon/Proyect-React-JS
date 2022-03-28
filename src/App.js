import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  const styles = {
    color: 'white',
    backgroundColor:'blueviolet',
    borderRadius:'1.5rem',
    padding:'1rem'
  }
    return ( 
      <div className = "App" >
        <Navbar></Navbar>
      {/*   <header className = "App-header" >
          <img src = { logo } className = "App-logo"alt = "logo" />
          <h1 style={styles} className="Titulo"> Comision 2404 </h1> 
          <button> Boton </button> 
          </header>  */}
      </div>
    );
}

export default App;