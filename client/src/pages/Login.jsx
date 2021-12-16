import React from 'react'

import MainContainer from '../containers/Login/MainContainer';
import HeaderContainer from '../containers/Login/HeaderContainer';
import InputsContainer from '../containers/Login/InputsContainer';
import ButtonsContainer from '../containers/Login/ButtonsContainer';
import LogoContainer from '../containers/Login/LogoContainer';


function Login() {
    return (
        <>
            <MainContainer>
                <HeaderContainer />
                <InputsContainer />
                <ButtonsContainer />
                <LogoContainer />
            </MainContainer>   
        </>
    )
}

export default Login
