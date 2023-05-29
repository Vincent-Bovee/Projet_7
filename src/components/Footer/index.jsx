import '../../styles/style.css'
import logo_blanc from '../../assets/img/logo_blanc.png'

function Footer() {
    return (
        <footer>
            <div className='footerImgContainer'>
                <img src={logo_blanc} alt="logo" />
            </div>
            <div className='footerTextContainer'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer