import '../styles/header.css'


export const Header = () => {
    const clickAcercaDe = () => {
        alert("someshit")
    }
    const clickContact = () => {
        alert("othershit")
    }

    return (
        <div style={{marginTop:'20px'}}>
            <div className={'row'}>
                <div className={'row'}>
                    <img alt={'logo'} style={{height:'80px', width:'80px'}} src={'assets/logo.jpg'}/>
                    <div className={'title'}> Richmond Latinos United </div>
                    {/*}<div className={'column'}>
                        <div className={'row'} style={{flexDirection:'row-reverse'}}>
                            <Button action={clickAcercaDe} text={'Acerca de'}/>
                            <Button action={clickContact} text={'Contáctanos'}/>
                        </div>
                    </div>{*/}
                </div>

            </div>
            <div className={'line'}/>
        </div>
    )
}
