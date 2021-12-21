import React from 'react';
import styled from 'styled-components';

import Form from '../containers/Login/Form';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as NowFuture } from '../assets/nowfuture.svg';

// const MainContainer = styled.div`
//     min-height: 100vh;
//     min-width: 100vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: fixed;
    top: 0vw;
    left: 50%;
    transform: translateX(-50%);

    ${({ theme }) => theme.media.tablet} {
        top: 50%;
        box-shadow: rgb(0 0 0 / 50%) 5px 15px 20px;
        border-radius: 5px;
        transform: translate(-50%, -50%);
    }
`;

const StyledLogo = styled(Logo)`
    width: 25%;

    ${({ theme }) => theme.media.tablet} {
        margin: 20px 0;
        width: 40%;
    }
`;

function Login() {
    return (
        <>
            <FormContainer>
                <NowFuture />
                <Form />
                <StyledLogo />
            </FormContainer>
        </>
    );
}

export default Login;
