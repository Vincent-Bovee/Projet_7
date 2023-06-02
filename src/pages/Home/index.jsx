import Card from '../../components/Card'
import '../../styles/style.css'
import data from '../../data/logement.json'

function Home() {    
    return (
        <main>
          <figure className='BlocImgContainer'>
            <p>Chez vous,<br className='mobile' /> partout et ailleurs</p>
          </figure>
          <section className='cardContainer'>  
            {data.map((item, index) => (
              <Card key={index} id={item.id} title={item.title} cover={item.cover} />
            ))}
          </section>
        </main>
    )
}

export default Home