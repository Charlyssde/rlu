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
            <div className={'row, text'} style={{marginBottom:'15px', marginTop:'15px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut dictum enim. Fusce dignissim at lectus eu congue. Etiam consequat a magna vitae viverra. Nullam pretium nisl quis facilisis dignissim. Sed efficitur porta mi in ornare. Nunc porta tortor eu ipsum aliquam blandit. Donec vestibulum blandit risus at eleifend. In hac habitasse platea dictumst. Cras tempor neque in sollicitudin rhoncus.
            </div>
            <div className={'row, text'} style={{fontWeight:'bold'}}>
                Las direcciones y horarios de nuestros entrenamientos son los siguientes:
            </div>
            <br/>
            <div className={'row, text'} style={{fontWeight:'bold'}}>
                10301 Hungary Spring Rd, Glen Allen, VA 23060
            </div>
            <div className={'row, text'} style={{fontWeight:'bold'}}>
                LUN - VIER 16:00 - 18:00 hrs.
            </div>
            <br/>
            <div className={'row, text'} style={{fontWeight:'bold'}}>
                11217 Greenwood Rd, Glen Allen, VA 23059
            </div>
            <div className={'row, text'} style={{fontWeight:'bold'}}>
                LUN - VIER 11:00 - 15:00 hrs.
            </div>
        </div>
    )
}
