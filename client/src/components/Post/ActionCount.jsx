import React from 'react';
import styled from 'styled-components';

const StyledActionCounts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        ${({ theme }) => theme.typography.caption};
        padding-inline: ${({ theme }) => theme.spacing.xs};
        padding-block: ${({ theme }) => theme.spacing.xxs};
    }
`;

const ActionCount = () => {
    return (
        <StyledActionCounts>
            <p>102 super</p>
            <p>38 komentarzy</p>
        </StyledActionCounts>
    );
};

export default ActionCount;
