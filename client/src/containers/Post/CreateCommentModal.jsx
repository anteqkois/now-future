import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Avatar from './../../components/utils/Avatar';
import DeleteCross from './../../components/utils/DeleteCross';

const StyledCreateCommentModal = styled.div``;
const StyledComment = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: 50px auto 50px;
    padding: ${({ theme }) => theme.spacing.s};
    gap: ${({ theme }) => theme.spacing.xxs};
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

const StyledTextArea = styled.textarea`
    ${({ theme }) => theme.typography.body2}
    resize: none;
    padding: ${({ theme }) => theme.spacing.xxs};
    min-height: 3rem;
    width: 100%;
    border: none;
    background-color: transparent;
`;

const CreateCommentModal = ({ closeModal }) => {
    const userStore = useSelector((state) => state.user);

    return (
        <StyledCreateCommentModal>
            <StyledComment>
                <StyledAvatar />
                <StyledContentContainer>
                    <StyledUsername>
                        {userStore.user.username}
                        <DeleteCross onClick={closeModal} />
                    </StyledUsername>
                    <StyledTextArea placeholder="Wpisz treść komentarza..."></StyledTextArea>
                </StyledContentContainer>
            </StyledComment>
        </StyledCreateCommentModal>
    );
};

export default CreateCommentModal;
