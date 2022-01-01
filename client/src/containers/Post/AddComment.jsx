import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CreateCommentModal from './CreateCommentModal';
import Modal from './../../components/utils/Modal';

const StyledAddComment = styled.div`
    > p {
        ${({ theme }) => theme.typography.caption};
        padding-bottom: ${({ theme }) => theme.spacing.s};
        font-weight: 600;
        text-align: center;
    }
`;

const AddComment = () => {
    const [createComment, setCreateComment] = useState(false);

    const handleCreateComment = useCallback(() => {
        setCreateComment((prev) => !prev);
    }, []);

    return (
        <StyledAddComment>
            {createComment ? (
                <Modal closeModal={handleCreateComment}>
                    <CreateCommentModal closeModal={handleCreateComment} />
                </Modal>
            ) : (
                <p onClick={handleCreateComment}>Dodaj komentarz</p>
            )}
        </StyledAddComment>
    );
};

export default AddComment;
