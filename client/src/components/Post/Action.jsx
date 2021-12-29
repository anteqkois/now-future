import React from 'react';
import styled from 'styled-components';

const StyledAction = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        ${({ theme }) => theme.typography.caption};
        padding: ${({ theme }) => theme.spacing.xs};
    }
    ::before,
    ::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
    ::before {
        top: 0;
    }
    ::after {
        bottom: 0;
    }
`;

const Action = () => {
    return (
        <StyledAction>
            <div>
                <span></span>
                <p>Super !</p>
            </div>
            <div>
                <span></span>
                <p>Komentarz</p>
            </div>
            <div>
                <span></span>
                <p>Zapisz</p>
            </div>
        </StyledAction>
    );
};

export default Action;
