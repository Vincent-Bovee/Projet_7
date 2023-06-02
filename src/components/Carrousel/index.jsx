import React, { useState } from 'react';
import arrow from '../../assets/img/arrow.png'
import '../../styles/style.css'

function Carrousel({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <figure className="carousel">
        {pictures.map((picture, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                <img className="img_produit" src={picture} alt={`Image ${index}`} />
                <p className='bullet'>{activeIndex + 1} / {pictures.length}</p>
            </div>

        ))}
        {pictures.length > 1 && (
        <>
            <button className="carousel-arrow carousel-arrow-prev" onClick={handlePrev}>
                <img src={arrow} alt="arrow" />
            </button>
            <button className="carousel-arrow carousel-arrow-next" onClick={handleNext}>
                <img src={arrow} alt="arrow" />
            </button>
        </>
        )}
    </figure>
    );
}

export default Carrousel;