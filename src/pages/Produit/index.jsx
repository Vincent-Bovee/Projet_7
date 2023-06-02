import React from 'react';
import { useParams, Navigate  } from 'react-router-dom';
import data from '../../data/logement.json';
import '../../styles/style.css'
import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'

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
    <main className="container_produit">

        <Carrousel pictures={produit.pictures} />

        <section className="container_produit_info">
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
        </section>


        <section className="container_menu_deroulant">
            <Collapse title="Description" text={produit.description} />
            <Collapse title="Equipemennt" text={produit.equipments} />
        </section>

    </main>
    );
}

export default Produit;