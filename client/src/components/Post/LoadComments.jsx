import React from 'react';
import styled from 'styled-components';

const StyledLoadComments = styled.p`
    ${({ theme }) => theme.typography.caption};
    padding-bottom: ${({ theme }) => theme.spacing.s};
    font-weight: 600;
    text-align: center;
`;

const LoadComments = ({ showComments, setShowComments, amountOfComments }) => {
    return amountOfComments === 0 ? (
        <StyledLoadComments>Brak komentarzy</StyledLoadComments>
    ) : (
        <StyledLoadComments onClick={() => setShowComments((prev) => !prev)}>
            {showComments ? 'Zwiń komentarze' : `Pokaż komentarze (${amountOfComments})`}
        </StyledLoadComments>
    );
};

export default LoadComments;
