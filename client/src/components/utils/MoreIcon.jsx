import React from 'react';
import styled from 'styled-components';

const StyledMoreIcon = styled.div`
    width: 40px;
    height: 40px;
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.xs};
    cursor: pointer;
    z-index: ${({ theme }) => theme.zIndex.level1};

    span {
        display: inline-block;
        margin: 2px;
        width: 4px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.grey};
        border-radius: 50%;
    }
`;

const MoreIcon = ({onClick}) => {

    return (
        <StyledMoreIcon onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </StyledMoreIcon>
    );
};

export default MoreIcon;
