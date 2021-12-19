import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 60%;
    height: 4.2rem;
    font-size: ${({ theme }) => theme.typography.button};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    border: none;
`

function Button() {
    return (
        <>
            <StyledButton>
                Zaloguj się!
            </StyledButton>
        </>
    )
}

export default Button
