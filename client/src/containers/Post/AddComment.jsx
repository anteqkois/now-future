import React, { useState } from 'react';
import styled from 'styled-components';
import CreateCommentModal from './CreateCommentModal';

const StyledAddComment = styled.div`
    p {
        ${({ theme }) => theme.typography.caption};
        padding-bottom: ${({ theme }) => theme.spacing.s};
        font-weight: 600;
        text-align: center;
    }
`;

const AddComment = () => {
    const [createComment, setCreateComment] = useState(false);

    return (
        <StyledAddComment>
            {createComment ? (
                <CreateCommentModal />
            ) : (
                <p onClick={() => setCreateComment((prev) => !prev)}>Dodaj komentarz...</p>
            )}
        </StyledAddComment>
    );
};

export default AddComment;
