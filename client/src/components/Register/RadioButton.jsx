import React from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.input`
    all: unset;
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    cursor: pointer;

    :checked {
        background: ${({ theme }) => theme.colors.primary};
    }
    :checked + label {
        color: ${({ theme }) => theme.colors.textOnPrimary};
    }
`;
const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 30px;
`;
const StyledLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

const RadioButton = ({ placeholder, id, name, onChange, value, error, checked }) => {
    return (
        <StyledContainer>
            <StyledRadioButton
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                checked={checked}
                error={error}
                required
            />
            <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
        </StyledContainer>
    );
};

export default RadioButton;
