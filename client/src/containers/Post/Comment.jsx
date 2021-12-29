import React from 'react';
import styled from 'styled-components';
import Avatar from './../../components/utils/Avatar';
import Content from './../../components/Comment/Content';
import Action from './../../components/Comment/Action';

const StyledComment = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: 50px auto 20px;
    padding: ${({ theme }) => theme.spacing.s};
    gap: ${({ theme }) => theme.spacing.xxs};
`;

const StyledAvatar = styled(Avatar)`
    grid-column: 1/2;
    grid-row: 1/2;
    width: 40px;
    height: 40px;
`;

const Comment = ({ _id, user, content, stars, createdAt, updatedAt }) => {
    return (
        <StyledComment>
            <StyledAvatar />
            <Content username={user.username} content={content} />
            <Action stars={stars} createdAt={createdAt} updatedAt={updatedAt} />
        </StyledComment>
    );
};

export default Comment;
// const StyledComments = styled.div`
//     position: relative;
//     display: grid;
//     grid-template-columns: 50px auto 50px;
//     grid-template-rows: 50px, auto, 50px;
//     padding: ${({ theme }) => theme.spacing.s};
//     gap: ${({ theme }) => theme.spacing.xs};

//     ::before {
//         content: '';
//         position: absolute;
//         top: 55px;
//         left: 40px;
//         display: inline-block;
//         width: calc(100% - 50px);
//         height: calc(100% - 60px);
//         border-left: 1px solid ${({ theme }) => theme.colors.primary};
//         border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
//         /* border-left:1px solid ${({ theme }) => theme.colors.grey}; */
//         border-radius: 0 0 0 5px;
//     }
//     ::after {
//         /* content: '';
//         position: absolute;
//         top: 0;
//         display: inline-block;
//         width: 100%;
//         height: 1px;
//         background-color: ${({ theme }) => theme.colors.grey}; */
//     }
// `;

// const StyledCommentContent = styled(StyledContent)`
//     /* background-color: ${({ theme }) => theme.colors.grey}; */
//     padding-left: ${({ theme }) => theme.spacing.l};
// `;

// const StyledCommentActionItems = styled(StyledActionItems)`
//     ::before,
//     ::after {
//         all: unset;
//     }
// `;

// {
//     comments.map((comment) => (
//         <StyledComments>
//             <StyledCommentAvatar></StyledCommentAvatar>
//             <StyledUsernameAndTime>
//                 <p>{comment.user.username}</p>
//                 <p>{convertDate(createdAt)}</p>
//             </StyledUsernameAndTime>
//             <StyledOptions>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </StyledOptions>
//             <StyledCommentContent>{comment.content}</StyledCommentContent>
//             <StyledEvents>
//                 <StyledActionCounts>
//                     <StyledCommentActionItems>
//                         <div>
//                             <span></span>
//                             <p>Super !</p>
//                         </div>
//                     </StyledCommentActionItems>
//                     <p>102 super</p>
//                     <p>38 komentarzy</p>
//                 </StyledActionCounts>
//             </StyledEvents>
//         </StyledComments>
//     ));
// }
