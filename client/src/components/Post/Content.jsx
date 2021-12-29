import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.span`
    grid-column: 1/4;
    grid-row: 3/4;
    ${({ theme }) => theme.typography.body2}
`;

const Content = ({ content }) => {
    return <StyledContent>{content}</StyledContent>;
};

export default Content;
