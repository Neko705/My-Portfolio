import { faAddressCard, faMobile } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import '../contact/index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div className="container contact-page">
            <div className='text-zone'>
                <h1 style={{color:"#ff474f"}}>Contact:</h1><br/>
                <p> Want to contact me, Here are my details and contact info:
                </p>
                <p>
                <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" /><br/>
                I live in Nagpur, Maharashtra pincode:440022
                </p>
                <p>
                    <FontAwesomeIcon  icon={faMobile} color="#4d4d4e"/><br/>
                    My no: +91 8208577085
                </p>

                <div class="typewriter">
                   <div class="slide"><i></i></div>
                   <div class="paper"></div>
                   <div class="keyboard"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;