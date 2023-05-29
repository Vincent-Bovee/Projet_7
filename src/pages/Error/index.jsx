import '../../styles/style.css'
import { Link } from 'react-router-dom'


function Error() {
    return (
        <div className='container_error'>
            <p className='error_404'>404</p>
            <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error_lien'>Retourner sur la page d’accueil</Link>

        </div>
    )
}

export default Error