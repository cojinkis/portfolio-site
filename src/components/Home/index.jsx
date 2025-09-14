import './index.scss'
import { Link } from 'react-router-dom'
const Home = () => {
    
    return(
        <div className='container home-page'>
                <div className='text-zone'>
                    <h1>Hi, <br/> I'm
                    Lucas Scott
                    <br/>
                    </h1>
                    <h2>Developer / Student</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

        </div>
    )
}

export default Home 