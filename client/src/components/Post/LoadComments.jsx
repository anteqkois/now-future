import React from 'react';
import styled from 'styled-components';

const StyledLoadComments = styled.p`
    text-align: center;
    > p {
        ${({ theme }) => theme.typography.caption};
        display: inline-block;
        padding-bottom: ${({ theme }) => theme.spacing.s};
        font-weight: 600;
        cursor: pointer;
    }
`;

const LoadComments = ({ showComments, setShowComments, amountOfComments }) => {
    return amountOfComments === 0 ? (
        <StyledLoadComments>
            <p>Brak komentarzy</p>
        </StyledLoadComments>
    ) : (
        <StyledLoadComments onClick={() => setShowComments((prev) => !prev)}>
            <p>{showComments ? 'Zwiń komentarze' : `Pokaż komentarze (${amountOfComments})`}</p>
        </StyledLoadComments>
    );
};

export default LoadComments;
