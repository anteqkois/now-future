import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: ${({ theme }) => theme.spacing.s} 0;
    position: relative;
    background-color: transparent;
`;

const StyledInput = styled.input`
    width: 100%;
    max-width: 300px;
    height: 40px;
    color: ${({ theme }) => theme.colors.textOnBackground};
    background: transparent;
    font-size: 1rem;
    padding-top: ${({ theme }) => theme.spacing.s};
    padding-bottom: ${({ theme }) => theme.spacing.xxs};
    border: none;
    border-bottom: 1px solid black;
    outline: none;

    &:focus + label,
    &:valid + label {
        font-size: 0.8rem;
        color: ${({ theme, error }) => {
            return error ? theme.colors.error : theme.colors.primary;
        }
        };
        transform: translateY(-15px);
        transition: all 0.3s ease;
    }
    &:focus ~ span,
    &:valid ~ span {
        transform: translateX(0%);
        transition: all 0.3s ease;
    }
`;

const StyledLabel = styled.label`
    position: absolute;
    left: 0;
    top: 10px;
    font-weight: ${({ theme }) => theme.typography.subtitle1};
    pointer-events: none;
    transition: all 0.3s ease;
`;
const StyledBorder = styled.span`
    position: absolute;
    left: 0px;
    top: 39px;
    height: 1px;
    width: 100%;
    max-width: 300px;
    border-bottom: 2px solid ${({ theme, error }) => {
        return error ? theme.colors.error : theme.colors.primary;
    }};
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    pointer-events: none;
`;
const StyledError = styled.p`
    min-height: 1.5rem;
    margin-top: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.typography.caption};
    color: ${({ theme }) => theme.colors.error};
`;

function Input({ type, placeholder, id, name, onChange, value, error }) {
    return (
        <StyledContainer>
            <StyledInput
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                error={error}
                required
            />
            <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
            <StyledBorder error={error} />
            <StyledError>{error ? `* ${error}` : ''}</StyledError>
        </StyledContainer>
    );
}

export default Input;
