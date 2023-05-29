import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/style.css';

function Card({ id, title, cover }) {
    return (
        <div>
            <Link to={`/produit/${id}`} className='cardLink'>
                <img className='cardImg' src={cover} />
                <div className='cardImgFilter'></div>
                <p className='cardTitle'>{title}</p>
            </Link>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;