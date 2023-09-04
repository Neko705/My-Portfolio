import './index.scss'
import logoA from '../../assets/images/myLogo.png'
import resume from '../../assets/images/My Resume.pdf';

const About =() => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <img src={logoA} alt='developer' />bout Me-
                </h1>
                <p>I'm vary ambitious Front-end Developer looking for a role in a IT company with 
                    opportunitys to work and learn with the letest technologies on challanging and diverse projects.
                </p>
                <p>I'm Passionate about implementing and launching new projects and developing my skills, 
                    make mistakes and learn from them.
                </p>
                <p>If I need to define myself in one sentance, i am a good lerner, i love 
                    reading books and i have a grate intrest in Astrophysics.
                </p>

                <h3>More about me:</h3>
                <div>
                    <a className='flat-button' href={resume} target="_blank">
                        View Resume
                    </a>
                </div>
            </div>

        </div>
    )
}

export default About;