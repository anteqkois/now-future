import React, { useRef } from 'react';
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
    max-width: calc(
        100vw - 2 * ${({ theme }) => theme.spacing.xs} - 2 * ${({ theme }) => theme.spacing.s} - 43px
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

const CreateCommentModal = ({ closeModal }) => {
    const userStore = useSelector((state) => state.user);
    const textArea = useRef(null);

    return (
        <StyledCreateCommentModal>
            <StyledComment>
                <StyledAvatar />
                <StyledContentContainer>
                    <StyledUsername>
                        {userStore.user.username}
                        <DeleteCross onClick={closeModal} />
                    </StyledUsername>
                    <StyledMyTextInput
                        ref={textArea}
                        contentEditable={true}
                        role="textbox"
                    ></StyledMyTextInput>
                </StyledContentContainer>
            </StyledComment>
        </StyledCreateCommentModal>
    );
};

export default CreateCommentModal;
