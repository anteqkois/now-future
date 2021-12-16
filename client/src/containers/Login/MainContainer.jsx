import React from 'react'
import styled from 'styled-components';

const StyledBackground = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.lightColors.background};
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 80%;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 #f5f5f5;
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    color: ${({ theme }) => theme.lightColors.textOnBackground};
    border-radius: ${({ theme }) => theme.spacing.s};


    ${({ theme }) => theme.media.bigTablet} {
        width: 60%;
    }

    ${({ theme }) => theme.media.desktop} {
        width: 30vh;
    }
`

function MainContainer() {
    return (
        <>
            <StyledBackground>
                <StyledForm>
                    
                </StyledForm>
            </StyledBackground>
        </>
    )
}

export default MainContainer
