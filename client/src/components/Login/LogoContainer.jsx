import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Container = styled.div`
    position: absolute;
    bottom: 7vh;
`

function LogoContainer() {
    return (
        <>
            <Container>
                <Logo />
            </Container>   
        </>
    )
}

export default LogoContainer
