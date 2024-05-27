import './index.scss'
import '../About/index.scss'
import logoA from '../../assets/images/myLogo.png'
import { Link } from 'react-router-dom';
//import resume from '../../assets/images/MyResume.jpg';

const About =() => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <img src={logoA} alt='developer' />bout Me:
                </h1>
                <p>As a highly ambitious Front-end Developer,
                    I am actively seeking a position within an IT company that offers opportunities
                    to engage with cutting-edge technologies and tackle diverse, challenging projects.
                </p>
                <p>I am passionate about implementing and launching new projects,
                   and I am committed to developing my skills by learning from mistakes.
                </p>
                <p>If I had to describe myself in one sentence, I would say that I am a dedicated learner.
                   I enjoy immersing myself in books, and I have a strong passion for anime and the Japanese language.
                </p>

                <h3>More about me:</h3>

                <Link to="/contact" className='flat-button'>Contact Me</Link>

                <div class='container'>
                    <div class='loader'></div>
                    <div class='loader'></div>
                    <div class='loader'></div>
                </div>
            </div>
        </div>



    )
}

export default About;