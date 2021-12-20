import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Container = styled.div`
    position: absolute;
    bottom: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        width: 50%;
    }
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
