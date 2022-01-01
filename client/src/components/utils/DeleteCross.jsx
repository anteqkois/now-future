import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledDelete = styled.div`
    position: relative;
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.colors.textOnBackground};
    cursor: pointer;
`;

const StyledCross = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 80%;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
    transform: translate(-50%, -50%) rotate(45deg);

    ::before {
        content: '';
        position: absolute;
        left: 50%;
        width: 4px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.grey};
        border-radius: 5px;
        transform: translate(-50%, 0) rotate(90deg);
    }
`;

const Delete = ({ className, onClick = null }) => {
    const button = useRef(null);

    const handleClick = () => {
        button.current.blur();
        onClick && onClick();
    };

    return (
        <StyledDelete tabIndex="0" className={className} ref={button} onClick={handleClick}>
            <StyledCross />
        </StyledDelete>
    );
};

export default Delete;
