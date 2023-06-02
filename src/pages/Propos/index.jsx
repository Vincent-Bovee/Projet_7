
import Collapse from '../../components/Collapse'
import '../../styles/style.css'

const titleFiabilite = "Fiabilité"
const textFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."

const titleRespect = "Respect"
const textRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

const titleService = "Service"
const textService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

const titleSecurite = "Sécurité"
const textSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


function Propos() {
    return (
        <main className='ContainerPropos'>
            <figure className='BlocImgContainerPropos'></figure>
            <section className="collapseContainerPropos">
                <Collapse title={titleFiabilite} text={textFiabilite} />
                <Collapse title={titleRespect} text={textRespect} />
                <Collapse title={titleService} text={textService} />
                <Collapse title={titleSecurite} text={textSecurite} />
            </section>

        </main>

    )
}

export default Propos