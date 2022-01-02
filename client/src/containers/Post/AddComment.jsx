import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CreateCommentModal from './CreateCommentModal';
import Modal from './../../components/utils/Modal';

const StyledAddComment = styled.div`
        text-align: center;
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

    const handleCreateComment = useCallback(() => {
        setCreateComment((prev) => !prev);
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
