import React from 'react';
import styled from 'styled-components';

const StyledAction = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
    display: flex;
    align-items: flex-start;
    p {
        ${({ theme }) => theme.typography.caption};
        padding-inline: ${({ theme }) => theme.spacing.xs};
    }
`;

const Action = ({ stars, createdAt, updatedAt }) => {
    return (
        <StyledAction>
            <div>
                <span></span>
                <p>23 Super</p>
            </div>
            <div>
                <span></span>
                <p>Data</p>
            </div>
            <div>
                <span></span>
                <p>Edytowany</p>
            </div>
        </StyledAction>
    );
};

export default Action;
