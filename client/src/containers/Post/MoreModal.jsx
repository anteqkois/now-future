import React from 'react';
import styled from 'styled-components';

const StyledMoreOption = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
`;
const StyledMoreOptionItem = styled.li`
    list-style-type: none;
`;

const MoreModal = ({ closeModal, handleDeleteComment }) => {
    return (
        <StyledMoreOption>
            <StyledMoreOptionItem>Edytuj</StyledMoreOptionItem>
            <StyledMoreOptionItem onClick={handleDeleteComment}>Usuń</StyledMoreOptionItem>
        </StyledMoreOption>
    );
};

export default MoreModal;
