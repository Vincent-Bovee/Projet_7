import { Link } from 'react-router-dom'
import '../../styles/style.css'
import logo from '../../assets/img/logo.png'

function Header() {
    return (
        <nav>
            <div className='navImgContainer'>
                <img src={logo} alt="logo" />
            </div>
            <div className='navLinkContainer'>
                <Link to="/" className='navLink'>Accueil</Link>
                <Link to="/propos" className='navLink'>A Propos</Link>
            </div>
        </nav>
    )
}

export default Header