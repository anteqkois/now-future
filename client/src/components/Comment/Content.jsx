import React from 'react';
import styled from 'styled-components';

const StyledContentContainer = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
    padding: ${({ theme }) => theme.spacing.xs};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
`;

const StyledContent = styled.div`
    ${({ theme }) => theme.typography.body2}
`;

const StyledUsername = styled.p`
    ${({ theme }) => theme.typography.subtitle2}
    font-weight: 700;
`;

const Content = ({ content, username }) => {
    return (
        <StyledContentContainer>
            <StyledUsername>{username}</StyledUsername>
            <StyledContent>{content}</StyledContent>
        </StyledContentContainer>
    );
};

export default Content;
