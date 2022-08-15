import '../styles/general.css'
import '../styles/header.css'
import '../styles/body.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

export const Body = () => {
    return (
        <div className={'column'}>
            <div className={'row'} style={{width:'100%', justifyContent:'center'}}>
                <div className={'column'} style={{alignContent:'center'}}>
                    <div className={'title'} style={{color:'black', fontSize:'xx-large'}}>
                        Escuela Formativa de Fútbol Soccer </div>
                    <div className={'title'} style={{color:'black', fontSize:'xx-large'}}>
                        Richmond Latinos Unidos </div>
                </div>
            </div>
            <div className={'row'} style={{width:'100%', justifyContent:'center'}}>
                <div className={'row'} style={{justifyContent:'center'}}>
                    <Carousel
                        showArrows={false} axis={"horizontal"} infiniteLoop={true}
                        dynamicHeight={false} autoPlay={true} interval={5000} width={'100%'}
                        showStatus={false} showIndicators={true} showThumbs={false}>
                        <div style={{justifyContent:'center', alignContent:'center'}}>
                            <img style={{width:'50%', height:'50%'}} alt={''} src="assets/1.jpg" />
                        </div>
                        <div style={{justifyContent:'center', alignContent:'center'}}>
                            <img style={{width:'50%', height:'50%'}}  alt={''} src="assets/2.jpg" />
                        </div>

                        <div style={{justifyContent:'center', alignContent:'center'}}>
                            <img style={{width:'50%', height:'50%'}} alt={''} src="assets/3.jpg" />
                        </div>
                        <div style={{justifyContent:'center', alignContent:'center'}}>
                            <img style={{width:'50%', height:'50%'}} alt={''} src="assets/4.jpg" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={'row, text'} style={{marginBottom:'15px', marginTop:'15px', fontSize:'x-large', fontWeight:'bold'}}>
                Richmond Latinos United es una organización sin fines de lucro, comprometida con
                los valores deportivos bien fundados en la niñez, apoyado de padres y adultos dispuestos
                a compartir su tiempo, espacio y conocimiento en la instrucción del fútbol.
                <ul>
                    Honestidad
                </ul>
                <ul>
                    Dedicación
                </ul>
                <ul>
                    Compromiso
                </ul>
                <ul>
                    Humildad
                </ul>
                <ul>
                    Disciplina
                </ul>
                <ul>
                    Compañerismo
                </ul>
                Son parte de nuestros cimientos, lo que en primer plano se les
                instruye a los niños, contando con más de 150 niños (actualmente)
                y 480 niños en total desde nuestro primer entrenamiento.
                Nuestro principal objetivo es formar jugadores responsables y respetuosos dentro de cualquier competencia.

                Nuestras categorías, todas dentro de las reglas requeridas para participar en las competencias:
                <ul>
                    U6
                </ul>
                <ul>
                    U8
                </ul>
                <ul>
                    U10
                </ul>
                <ul>
                    U12
                </ul>
                <ul>
                    U14
                </ul>
                <ul>
                    U16
                </ul>
                <div style={{padding:'10px', borderRadius:'12px',textAlign:'center',display:'flex', justifyContent:'center', backgroundColor:'#205089'}}>
                    <div style={{width:'50%', fontStyle:'italic', color:'white'}}>
                        AQUEL QUE PORTE UN UNIFORME DE NUESTRA ORGANIZACIÓN LO HARÁ DE MANERA REPONSABLE, CON HONOR
                        Y RESPETO AL DEPORTE, AL CAMPO Y A CUALQUIER RIVAL.
                    </div>
                </div>
            </div>

            <div className={'row, text'} style={{fontWeight:'bolder', marginTop:'35px', textAlign:'center'}}>
                Las direcciones y horarios de nuestros entrenamientos son los siguientes:
            </div>
            <br/>
            <div className={'row'}>
                <div className={'column'} style={{width:'50%', textAlign:'center'}}>
                    <div className={'row, text'} style={{fontWeight:'bolder'}}>
                        10301 Hungary Spring Rd, Glen Allen, VA 23060
                    </div>
                    <div className={'row, text'} style={{fontWeight:'bolder'}}>
                        LUN - VIER 16:00 - 18:00 hrs.
                    </div>
                </div>
                <div className={'column'} style={{width:'50%', textAlign:'center'}}>
                    <div className={'row, text'} style={{fontWeight:'bolder'}}>
                        11217 Greenwood Rd, Glen Allen, VA 23059
                    </div>
                    <div className={'row, text'} style={{fontWeight:'bolder'}}>
                        LUN - VIER 11:00 - 15:00 hrs.
                    </div>
                </div>
            </div>
        </div>
    )
}
