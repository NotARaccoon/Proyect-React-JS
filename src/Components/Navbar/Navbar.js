import './Navbar.css'
import logoNav from './img/Logo.png';

const Navbar = () =>{
    return(
        <nav className='Navbar'>
            <img className='logo' src={logoNav}></img>
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
        </nav>
        
    )
}

export default Navbar