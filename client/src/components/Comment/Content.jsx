import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MoreIcon from './../utils/MoreIcon';

const StyledContentContainer = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
    max-width: 100vw;
    padding: ${({ theme }) => theme.spacing.xs};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
    overflow-x: hidden;
`;

const StyledContent = styled.p`
    ${({ theme }) => theme.typography.body2}
`;

const StyledUsername = styled.p`
    ${({ theme }) => theme.typography.subtitle2}
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
`;

const Content = ({ _id, content, user, handleShowMoreModalWithCommentId }) => {
    const userStore = useSelector((state) => state.user);

    return (
        <StyledContentContainer>
            <StyledUsername>
                {user.username}
                {userStore.user._id === user._id && (
                    <MoreIcon
                        onClick={() => {
                            handleShowMoreModalWithCommentId(_id);
                        }}
                    />
                )}
            </StyledUsername>
            <StyledContent>{content}</StyledContent>
        </StyledContentContainer>
    );
};

export default Content;
