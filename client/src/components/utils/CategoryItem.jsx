import React from 'react';
import styled from 'styled-components';

const StyledCategoryItem = styled.p`
    ${({ theme }) => theme.typography.caption}
    display: inline-block;
    margin: ${({ theme }) => theme.spacing.xxs};
    padding-inline: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.textOnSecondary};
    background-color: #03dac53b;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 100px;
    box-shadow: #03dac53b 3px 3px 10px;
`;

const CategoryItem = ({ category }) => {
    return <StyledCategoryItem>{category.name}</StyledCategoryItem>;
};

export default CategoryItem;
