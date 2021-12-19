import React from 'react'
import styled from 'styled-components';

import HeaderContainer from '../components/Login/HeaderContainer';
import StyledForm from '../containers/Login/StyledForm';
import SwitchSignLog from '../components/Login/SwitchSignLog';
import LogoContainer from '../components/Login/LogoContainer';


const MainContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Login() {
    return (
        <>
            <MainContainer>
                <HeaderContainer />
                <StyledForm />
                <SwitchSignLog />
                <LogoContainer />
            </MainContainer>
        </>
    )
}

export default Login
