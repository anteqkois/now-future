import React from 'react'
import styled from 'styled-components'

import { ReactComponent as NowFuture } from '../../assets/nowfuture.svg';

const Container = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    align-item: center;
    justify-content: center;
    position: absolute;
    top: 3rem;
`

function HeaderContainer() {
    return (
        <>
           <Container>
                <NowFuture />
           </Container>
        </>
    )
}

export default HeaderContainer
