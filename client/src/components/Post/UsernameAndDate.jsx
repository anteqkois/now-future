import React from 'react';
import { convertDate } from './../../helpers/convertDate';
import styled from 'styled-components';

const StyledUsernameAndDate = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    margin: ${({ theme }) => theme.spacing.xs};

    p {
        ${({ theme }) => theme.typography.subtitle1}

        :nth-of-type(1) {
            font-weight: 500;
        }

        :nth-of-type(2) {
            ${({ theme }) => theme.typography.caption};
            color: ${({ theme }) => theme.colors.grey};
        }
    }
`;

const UsernameAndDate = ({ user, createdAt }) => {
    return (
        <StyledUsernameAndDate>
            <p>{user.username}</p>
            <p>{convertDate(createdAt)}</p>
        </StyledUsernameAndDate>
    );
};

export default UsernameAndDate;
