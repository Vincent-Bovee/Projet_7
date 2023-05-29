import React from 'react';
import { useParams, Navigate  } from 'react-router-dom';
import data from '../../data/logement.json';
import '../../styles/style.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Collapse from '../../components/Collapse'
import arrow from '../../assets/img/arrow.png'

function Produit() {
    const { key } = useParams();

    // Rechercher les informations du produit en fonction de l'ID (key)
    const produit = data.find(item => item.id === key);

    if (!produit) {
        return <Navigate to="/erreur" replace />;
    }

    function Rating({ rating }) {
        const maxRating = 5;
        const filledStars = Math.round(rating);
        const emptyStars = maxRating - filledStars;
      
        return (
            <div>
                {[...Array(filledStars)].map((_, index) => (
                    <span key={index} className='filledStars'>★</span>
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                    <span key={index} className='emptyStars'>★</span>
                ))}
            </div>
        );
    }

    function Name({ name }) {
        const formattedName = name.replace(' ', '<br />');
      
        return (
          <div>
            <p dangerouslySetInnerHTML={{ __html: formattedName }}></p>
          </div>
        );
    }

    return (
    <div className="container_produit">
    <Carousel
    infiniteLoop
    autoPlay
    showStatus={false}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
        <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-prev">
            <img src={arrow} alt="arrow" />
        </button>
        )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
        <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-next">
            <img src={arrow} alt="arrow" />
        </button>
        )
    }
    >       
        {produit.pictures.map((picture, index) => (
          <div key={index}>
            <img className="img_produit" src={picture} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>

        <div className="container_produit_info">
            <div className="container_produit_info_1">
                <h2 className="title_produit">{produit.title}</h2>
                <p className="location_produit">{produit.location}</p>
                {produit.tags.map((tags, index) => (
                    <p key={index} className="tags_produit">{tags}</p>
                ))}
            </div>

            <div className="container_produit_info_2">
                <div className="container_produit_host">
                    <Name name={produit.host.name} />
                    <img className="img_host" src={produit.host.picture} alt="" />
                </div>

                
                <div>
                    <Rating rating={produit.rating} />
                </div>
            </div>
        </div>


        <div className="container_menu_deroulant">

            <Collapse title="Description" text={produit.description} />
            <Collapse title="Equipemennt" text={produit.equipments} />

        </div>

    </div>
    );
}

export default Produit;