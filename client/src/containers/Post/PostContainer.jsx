import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { removeComment, postStar, removeStar, resetError } from '../../feature/postsSlice';

import Post from './Post';
import LoadComments from './../../components/Post/LoadComments';
import Comment from './Comment';
// import AddComment from './../../containers/Post/AddComment';
import MoreModal from './../../containers/Post/MoreModal';
import Modal from '../../components/utils/Modal';
import CreateCommentModal from './CreateCommentModal';

const StyledPostContainer = styled.article`
    box-shadow: #cac8c8 1px 1px 10px;
    border-radius: 5px;
    width: 100%;
    max-width: 720px;
`;

const StyledAddComment = styled.p`
    ${({ theme }) => theme.typography.caption};
    display: flex;
    justify-content: center;
    padding-bottom: ${({ theme }) => theme.spacing.s};
    font-weight: 600;
    cursor: pointer;
`;

const PostContainer = ({ _id, user, title, content, categories, stars, comments, createdAt, updatedAt }) => {
    const [showComments, setShowComments] = useState(false);
    const [moreComment, setMoreComment] = useState(false);
    const [createComment, setCreateComment] = useState(false);

    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);

    const haveStar = useMemo(() => {
        return stars.findIndex((star) => star._id === userStore.user._id) === -1 ? false : true;
    }, [stars, userStore]);

    const handleShowMoreModalWithCommentId = useCallback((idComment) => {
        setMoreComment(typeof idComment === 'string' ? idComment : false);
    }, []);

    const handleCreateComment = useCallback(() => {
        setCreateComment((prev) => !prev);
        dispatch(resetError());
    }, []);

    const handleDeleteComment = () => {
        dispatch(removeComment({ idPost: _id, idComment: moreComment }));
    };

    const handleAddStarPost = () => {
        haveStar
            ? dispatch(removeStar({ idPost: _id, idUser: userStore.user._id }))
            : dispatch(postStar({ idPost: _id, idUser: userStore.user._id }));
    };

    return (
        <StyledPostContainer>
            <Post
                user={user}
                title={title}
                content={content}
                categories={categories}
                createdAt={createdAt}
                updatedAt={updatedAt}
                amountOfStars={stars.length}
                amountOfComments={comments.length}
                setShowComments={setShowComments}
                handleAddStarPost={handleAddStarPost}
                haveStar={haveStar}
            />
            <StyledAddComment onClick={handleCreateComment}>Dodaj komentarz</StyledAddComment>
            <LoadComments
                showComments={showComments}
                setShowComments={setShowComments}
                amountOfComments={comments.length}
            />
            {showComments &&
                comments.map((comment) => (
                    <Comment
                        {...comment}
                        handleShowMoreModalWithCommentId={handleShowMoreModalWithCommentId}
                    />
                ))}
            {createComment && (
                <Modal closeModal={handleCreateComment}>
                    <CreateCommentModal closeModal={handleCreateComment} _id={_id} />
                </Modal>
            )}
            {moreComment && (
                <Modal closeModal={handleShowMoreModalWithCommentId}>
                    <MoreModal
                        closeModal={handleShowMoreModalWithCommentId}
                        handleDeleteComment={handleDeleteComment}
                    />
                </Modal>
            )}
        </StyledPostContainer>
    );
};

export default PostContainer;
