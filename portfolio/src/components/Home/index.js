import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/A logo.jpg'
import './index.scss';
import '../../App.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={logoTitle} alt='developer' />
                khilesh Wankhede
                <br />
                web developer
                </h1>
                <h2>Frontend Developer / JavaScript / React Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;