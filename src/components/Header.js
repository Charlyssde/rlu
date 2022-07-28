import {Button} from "./Button";
import '../styles/header.css'


export const Header = () => {
    const clickAcercaDe = () => {
        alert("someshit")
    }
    const clickContact = () => {
        alert("othershit")
    }

    //                    <img alt={'logo'} style={{height:'80px', width:'80px'}} src={'https://firebasestorage.googleapis.com/v0/b/richmondlatinosunited.appspot.com/o/%C3%ADndice.jpg?alt=media&token=526d44b7-699a-43b6-bc22-274bf3e511a3'}/>
    return (
        <div style={{marginTop:'20px'}}>
            <div className={'row'}>
                <div className={'row'}>
                    <div className={'title'}> Richmond Latinos United </div>
                </div>
                <div className={'row'} style={{flexDirection:'row-reverse'}}>
                    <Button action={clickAcercaDe} text={'Acerca de'}/>
                    <Button action={clickContact} text={'Contáctanos'}/>
                </div>
            </div>
            <div className={'line'}/>
        </div>
    )
}
