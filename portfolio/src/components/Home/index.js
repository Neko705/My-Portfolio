import logoTitle from '../../assets/images/myLogo.png'
import './index.scss';
import '../../App.scss';
import Homeimg from './homeImg';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={logoTitle} alt='developer' />
                khilesh Wankhede
                <br />
                Web Developer
                </h1>
                <h2>Frontend Developer / JavaScript / React Developer</h2>
                <a className='flat-button' href="https://neko705.github.io/Resume/" >
                    View Resume
                </a>


            </div>
            <Homeimg />
        </div>
    )
}

export default Home;