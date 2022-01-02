import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putComment } from '../../feature/postsSlice';

import styled from 'styled-components';
import Avatar from './../../components/utils/Avatar';
import DeleteCross from './../../components/utils/DeleteCross';
import Button from './../../components/utils/Button';

const StyledCreateCommentModal = styled.div``;
const StyledComment = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: 50px auto auto 50px;
    padding: ${({ theme }) => theme.spacing.s};
    gap: ${({ theme }) => theme.spacing.xxs};
    row-gap: ${({ theme }) => theme.spacing.s};
`;

const StyledAvatar = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/2;
    width: 40px;
    height: 40px;
`;

const StyledContentContainer = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
    padding: ${({ theme }) => theme.spacing.xs};
    max-width: min(
        calc(100vw - 2 * ${({ theme }) => theme.spacing.xs} - 2 * ${({ theme }) => theme.spacing.s} - 43px),
        673px
    );
    height: auto;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
`;

const StyledUsername = styled.p`
    ${({ theme }) => theme.typography.subtitle2}
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
`;

const StyledMyTextInput = styled.p`
    ${({ theme }) => theme.typography.body2}
    padding: ${({ theme }) => theme.spacing.xxs};
    border: 1px solid #ccc;
    width: 100%;
    overflow: hidden;
    min-height: 2rem;

    :empty::before {
        content: 'Wpisz treść komentarza...';
    }
`;

const StyledButtons = styled.div`
    grid-column: 1/3;
    grid-row: 4/5;
    display: flex;
    /* justify-content: center; */
    padding-left: calc(40px + ${({ theme }) => theme.spacing.xxs});
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing.s};
`;
const StyledError = styled.p`
    grid-column: 2/3;
    grid-row: 3/4;
    min-height: 1.5rem;
    font-size: ${({ theme }) => theme.typography.caption};
    color: ${({ theme }) => theme.colors.error};
`;

const CreateCommentModal = ({ _id, closeModal }) => {
    const [commentContent, setCommentContent] = useState('');
    const userStore = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.posts);
    const textArea = useRef(null);

    const dispatch = useDispatch();

    const handleTypingContent = () => {
        setCommentContent(textArea.current.textContent);
    };

    const handleSubmit = async () => {
        const data = await dispatch(
            putComment({
                id: _id,
                body: {
                    userId: userStore.user._id,
                    content: commentContent,
                },
            }),
        );
        !data.error && closeModal();
    };

    return (
        <StyledCreateCommentModal>
            <StyledComment>
                <StyledAvatar />
                <StyledContentContainer>
                    <StyledUsername>
                        {userStore.user.username}
                        {/* <DeleteCross onClick={closeModal} /> */}
                    </StyledUsername>
                    <StyledMyTextInput
                        ref={textArea}
                        contentEditable={true}
                        role="textbox"
                        onKeyUp={handleTypingContent}
                    ></StyledMyTextInput>
                </StyledContentContainer>
                <StyledError>{error ? `* ${error}` : ''}</StyledError>
                <StyledButtons>
                    <Button onClick={handleSubmit}>Dodaj</Button>
                    <Button option="ghost">Anuluj</Button>
                </StyledButtons>
            </StyledComment>
        </StyledCreateCommentModal>
    );
};

export default CreateCommentModal;
