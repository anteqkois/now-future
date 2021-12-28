import React from 'react';
import styled from 'styled-components';
import { convertDate } from './../../helpers/convertDate';

const StyledPostContainer = styled.article`
    /* display: grid; */
    /* border: 1px solid ${({ theme }) => theme.colors}; */
    padding: ${({ theme }) => theme.spacing.s};
    box-shadow: #cacaca 5px 3px 10px;
    border-radius: 5px;
`;
const StyledPost = styled.article`
    /* min-height: 300px; */
    display: grid;
    grid-template-columns: 50px auto 50px;
    grid-template-rows: 50px, 50px, auto, 50px, 50px;
    gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledAvatar = styled.span`
    width: 50px;
    height: 50px;
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
`;
const StyledUsernameAndTime = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    margin: ${({ theme }) => theme.spacing.xs};

    p {
        ${({ theme }) => theme.typography.subtitle1}

        :nth-of-type(1) {
            font-weight: 500;
        }

        :nth-of-type(2) {
            ${({ theme }) => theme.typography.overline}
            color: ${({ theme }) => theme.colors.grey};
        }
    }
`;
const StyledOptions = styled.div`
    width: 100%;
    height: 40px;
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.xs};

    span {
        display: inline-block;
        margin: 2px;
        width: 4px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.grey};
        border-radius: 50%;
    }
`;
const StyledTitle = styled.span`
    grid-column: 1/4;
    grid-row: 2/3;
    ${({ theme }) => theme.typography.body1}
    font-weight: 700;
`;
const StyledContent = styled.span`
    grid-column: 1/4;
    grid-row: 3/4;
    ${({ theme }) => theme.typography.body2}
`;
const StyledCategorieContainer = styled.span`
    grid-column: 1/4;
    grid-row: 4/5;
    margin-top: ${({ theme }) => theme.spacing.xs};

    p {
        ${({ theme }) => theme.typography.caption}
        display: inline-block;
        margin: ${({ theme }) => theme.spacing.xxs};
        padding-inline: ${({ theme }) => theme.spacing.xs};
        color: ${({ theme }) => theme.colors.textOnSecondary};
        background-color: #03dac53b;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 100px;
        box-shadow: #03dac53b 3px 3px 10px;
    }
`;
const StyledEvents = styled.div`
    grid-column: 1/4;
    grid-row: 5/6;
`;
const StyledActionItems = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        ${({ theme }) => theme.typography.body2};
        padding: ${({ theme }) => theme.spacing.xs};
    }
    ::before,
    ::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
    ::before {
        top: 0;
    }
    ::after {
        bottom: 0;
    }
`;
const StyledActionCounts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        ${({ theme }) => theme.typography.body2};
        padding-inline: ${({ theme }) => theme.spacing.xs};
        padding-block: ${({ theme }) => theme.spacing.xxs};
    }
  
`;

const Post = ({ _id, user, title, content, categories, stars, comments, createdAt, updatedAt }) => {
    return (
        <StyledPostContainer>
            <StyledPost>
                <StyledAvatar></StyledAvatar>
                <StyledUsernameAndTime>
                    <p>{user.username}</p>
                    <p>{convertDate(createdAt)}</p>
                </StyledUsernameAndTime>
                <StyledOptions>
                    <span></span>
                    <span></span>
                    <span></span>
                </StyledOptions>
                <StyledTitle>{title}</StyledTitle>
                <StyledContent>{content}</StyledContent>
                <StyledCategorieContainer>
                    {categories.map((category) => (
                        <p>{category.name}</p>
                    ))}
                </StyledCategorieContainer>
                <StyledEvents>
                  <StyledActionCounts>
                    <p>102 super</p>
                    <p>38 komentarzy</p>
                  </StyledActionCounts>
                    <StyledActionItems>
                        <div>
                            <span></span>
                            <p>Super !</p>
                        </div>
                        <div>
                            <span></span>
                            <p>Dodaj komentarz</p>
                        </div>
                        <div>
                            <span></span>
                            <p>Zapisz</p>
                        </div>
                    </StyledActionItems>
                </StyledEvents>
            </StyledPost>
        </StyledPostContainer>
    );
};

export default Post;