import '../../styles/style.css'
import { Link } from 'react-router-dom'


function Error() {
    return (
        <main className='container_error'>
            <p className='error_404'>404</p>
            <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error_lien'>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error