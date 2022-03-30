import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () =>{
    return(
        <nav className='Navbar'>
            <div>
            <img className='logo' src="./images/Logo.png"></img>
            </div>
            
            <ul className='navButtons'>
                <li className='navLink'>
                    <a href='#'>About Artist</a>
                </li>
                <li className='navLink'>
                    <a href='#'>Gallery</a>
                </li>
                <li className='navLink'>
                    <a href='#'>Contact</a>
                </li>
                <li className='navLink'>
                    <a href='#'>Commisions</a>
                </li>
            </ul>

            <div>
                <CartWidget></CartWidget>
            </div>

        </nav>
        
    )
}

export default Navbar