import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.span`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
`;

const Avatar = ({ className }) => {
    return <StyledAvatar className={className}></StyledAvatar>;
};

export default Avatar;
