import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    left: 10%;
    margin-top: 20vh;
`

const StyledLink = styled.p`
    font-size: ${({ theme }) => theme.typography.body1};
    color: ${({ theme }) => theme.colors.primary};

    &:active {
        color: ${({ theme }) => theme.colors.primaryVariant};
    }
`

function SignUpLink() {
    return (
        <>
            <Container>
                <StyledLink>Załóż konto</StyledLink>
            </Container>
        </>
    )
}

export default SignUpLink
