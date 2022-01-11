import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Close } from '../../assets/close.svg'

const StyledAddContainer = styled.div`
    /* background: ${({ theme }) => theme.colors.lightGrey}; */
    box-shadow: 0px 3px 4px 1px ${({ theme }) => theme.colors.primaryVariant};
    width: 350px;
    height: 450px;
    position: absolute;
    top: calc(50% - 225px);
    left: calc(50% - 175px);
    border-radius: 12px;
    outline: blur;
`

const StyledHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.gray}; */
    box-shadow: 0px 5px 4px -3px ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
`

const StyledHeader = styled.h5`
    font-size: ${({ theme }) => theme.typography.H5};
    text-align: center;

    &::before {
        content: 'Zadaj pytanie';
    }
`

const StyledTextarea = styled.textarea`
    width: 300px;
    height: 250px;
    margin: ${({ theme }) => theme.spacing.m} calc(50% - 150px);
    padding: ${({ theme }) => theme.spacing.xs};
    background: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.body2};
    resize: none;
    border: none;
    outline: none;
`


function Add() {
    return (
        <>
            <StyledAddContainer>
                <StyledHeading>
                    <StyledHeader />
                    <Close />
                </StyledHeading>

                <StyledTextarea placeholder='Podaj treść pytania...' />
            </StyledAddContainer>
        </>
    )
}

export default Add
