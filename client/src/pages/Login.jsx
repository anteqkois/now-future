import React from 'react'
import styled from 'styled-components';

import HeaderContainer from '../components/utils/HeaderContainer'
import StyledForm from '../containers/Login/StyledForm'
import LogoContainer from '../components/utils/LogoContainer';


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
            </MainContainer>
        </>
    )
}

export default Login
