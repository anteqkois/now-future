import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeComment } from '../../feature/postsSlice';

import Post from './Post';
import LoadComments from './../../components/Post/LoadComments';
import Comment from './Comment';
import AddComment from './../../containers/Post/AddComment';
import MoreModal from './../../containers/Post/MoreModal';
import Modal from '../../components/utils/Modal';

const StyledPostContainer = styled.article`
    box-shadow: #cac8c8 1px 1px 10px;
    border-radius: 5px;
    width: 100%;
    max-width: 720px;
`;

const PostContainer = ({ _id, user, title, content, categories, stars, comments, createdAt, updatedAt }) => {
    const [showComments, setShowComments] = useState(false);
    const [moreComment, setMoreComment] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState(null);

    const dispatch = useDispatch();

    const handleMoreCommentModal = useCallback((idComment) => {
        setMoreComment((prev) => !prev);
        typeof idComment === 'string' ? setSelectedCommentId(idComment) : setSelectedCommentId(null);
    }, []);

    const handleDeleteComment = () => {
        dispatch(removeComment({ idPost: _id, idComment: selectedCommentId }));
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
            />
            <AddComment user={user} _id={_id} />
            <LoadComments
                showComments={showComments}
                setShowComments={setShowComments}
                amountOfComments={comments.length}
            />
            {showComments &&
                comments.map((comment) => (
                    <Comment {...comment} handleMoreCommentModal={handleMoreCommentModal} />
                ))}
            {moreComment && (
                <Modal closeModal={handleMoreCommentModal}>
                    <MoreModal
                        closeModal={handleMoreCommentModal}
                        handleDeleteComment={handleDeleteComment}
                    />
                </Modal>
            )}
        </StyledPostContainer>
    );
};

export default PostContainer;
