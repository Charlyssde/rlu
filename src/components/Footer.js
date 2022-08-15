import {faFacebook, faInstagram, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/footer.css'
import '../styles/general.css'

export const Footer = () => {

    return (
        <div className={'column'} style={{backgroundColor:'#3185E7', justifyContent:'center'}}>
            <div className={'row, footer-text'}>
                Conéctate con nosotros para más información
            </div>
            <div className={'row, footer-text'}>
                +1 (804) 381-8356
            </div>
            <div className={'row, footer-text'}>
                +1 (804) 933-9368
            </div>
            <div className={'row, footer-text'}>
                Y síguenos en nuestras redes sociales
            </div>

            <div className={'row'} style={{justifyContent:'center'}}>
                <a target={'_blank'} href={'https://www.facebook.com/Richmond-Latinos-United-105748575579379'} >
                    <FontAwesomeIcon icon={faFacebook} className={'icon'}/>
                </a>
                <a target={'_blank'} href={'https://www.instagram.com/richmond_latinos_united/'}>
                    <FontAwesomeIcon icon={faInstagram} className={'icon'}/>
                </a>
                <a target={'_blank'} href={'https://twitter.com/united_richmond'}>
                    <FontAwesomeIcon icon={faTwitter} className={'icon'}/>
                </a>
                <a target={'_blank'} href={'wa.me/+18049339368'}>
                    <FontAwesomeIcon icon={faWhatsapp} className={'icon'}/>
                </a>
            </div>

        </div>
    )

}
