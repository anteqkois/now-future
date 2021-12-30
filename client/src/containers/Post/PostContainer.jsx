import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import LoadComments from './../../components/Post/LoadComments';
import Comment from './Comment';
import AddComment from './../../containers/Post/AddComment';

const StyledPostContainer = styled.article`
    box-shadow: #cac8c8 1px 1px 10px;
    border-radius: 5px;
`;

const PostContainer = ({ _id, user, title, content, categories, stars, comments, createdAt, updatedAt }) => {
    const [showComments, setShowComments] = useState(false);

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
                <AddComment user={user} />
            <LoadComments
                showComments={showComments}
                setShowComments={setShowComments}
                amountOfComments={comments.length}
            />
            {showComments && comments.map((comment) => <Comment {...comment} />)}
        </StyledPostContainer>
    );
};

export default PostContainer;
