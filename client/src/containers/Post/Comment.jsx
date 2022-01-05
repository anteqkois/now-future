import React from 'react';
import styled from 'styled-components';
import Avatar from './../../components/utils/Avatar';
import Content from './../../components/Comment/Content';
import Action from './../../components/Comment/Action';

const StyledComment = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: 50px auto 20px;
    padding: ${({ theme }) => theme.spacing.s};
    gap: ${({ theme }) => theme.spacing.xxs};
`;

const StyledAvatar = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/2;
    width: 40px;
    height: 40px;
`;

const Comment = ({ _id, user, content, stars, createdAt, updatedAt, handleMoreCommentModal }) => {
    return (
        <StyledComment>
            <StyledAvatar />
            <Content user={user} content={content} handleMoreCommentModal={handleMoreCommentModal} _id={_id} />
            <Action stars={stars} createdAt={createdAt} updatedAt={updatedAt} />
        </StyledComment>
    );
};

export default Comment;
