import React from 'react';
import styled from 'styled-components';

import UsernameAndDate from '../../components/Post/UsernameAndDate';
import MoreIcon from '../../components/utils/MoreIcon';
import Title from '../../components/Post/Title';
import Content from '../../components/Post/Content';
import Avatar from '../../components/utils/Avatar';
import CategoryItem from '../../components/utils/CategoryItem';
import ActionCount from '../../components/Post/ActionCount';
import Action from './../../components/Post/Action';

const StyledPost = styled.div`
    display: grid;
    grid-template-columns: 50px auto 50px;
    grid-template-rows: 50px, 50px, auto, 50px, 50px;
    padding: ${({ theme }) => theme.spacing.s};
    gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledAvatar = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/2;
`;

const StyledCategoriesContainer = styled.span`
    grid-column: 1/4;
    grid-row: 4/5;
    margin-top: ${({ theme }) => theme.spacing.xs};
`;

const StyledActionContainer = styled.div`
    grid-column: 1/4;
    grid-row: 5/6;
`;

const Post = ({ user, title, content, categories, createdAt, updatedAt }) => {
    return (
        <StyledPost>
            <StyledAvatar />
            <UsernameAndDate user={user} createdAt={createdAt} />
            <MoreIcon />
            <Title title={title} />
            <Content content={content} />
            <StyledCategoriesContainer>
                {categories.map((category) => (
                    <CategoryItem category={category} />
                ))}
            </StyledCategoriesContainer>
            <StyledActionContainer>
                <ActionCount />
                <Action />
            </StyledActionContainer>
        </StyledPost>
    );
};

export default Post;
