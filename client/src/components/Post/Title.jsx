import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
    grid-column: 1/4;
    grid-row: 2/3;
    ${({ theme }) => theme.typography.body1}
    font-weight: 700;
`;

const Title = ({ title }) => {
    return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
