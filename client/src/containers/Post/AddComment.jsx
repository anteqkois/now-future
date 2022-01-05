import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { resetError } from '../../feature/postsSlice';

import CreateCommentModal from './CreateCommentModal';
import Modal from './../../components/utils/Modal';
import { useDispatch } from 'react-redux';

const StyledAddComment = styled.div`
    display: flex;
    justify-content: center;
    > p {
        ${({ theme }) => theme.typography.caption};
        display: inline-block;
        padding-bottom: ${({ theme }) => theme.spacing.s};
        font-weight: 600;
        cursor: pointer;
    }
`;

const AddComment = ({ _id }) => {
    const [createComment, setCreateComment] = useState(false);
    const dispatch = useDispatch();

    const handleCreateComment = useCallback(() => {
        setCreateComment((prev) => !prev);
        dispatch(resetError());
    }, []);

    return (
        <StyledAddComment>
            {createComment ? (
                <Modal closeModal={handleCreateComment}>
                    <CreateCommentModal closeModal={handleCreateComment} _id={_id} />
                </Modal>
            ) : (
                <p onClick={handleCreateComment}>Dodaj komentarz</p>
            )}
        </StyledAddComment>
    );
};

export default AddComment;
