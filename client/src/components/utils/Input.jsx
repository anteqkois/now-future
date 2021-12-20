import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.textOnBackground};
    font-size: 1rem;
    padding-top: ${({ theme }) => theme.spacing.s };
    border: none;
    outline: none;

    &:focus + .label .content,
    &:valid + .label .content{
        transform: translateY(-150%);
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.primary}
    }

    &:focus + .label::after,
    &:valid + .label::after {
        transform: translateX(0%);
    }
`

const StyledLabel = styled.label`
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;

    &::after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary };
        transform: translateX(-100%);
        transition: transform .3s ease;
    }
`

const LabelSpan = styled.span`
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all .3s ease;
`

function Input({type, placeholder, id, name, onChange, value}) {
    return (
        <>
            <StyledInput
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                required
            />

            <StyledLabel htmlFor={name} className="label">
                <LabelSpan className="content">{placeholder}:</LabelSpan>
            </StyledLabel>
        </>
    );
}

export default Input
