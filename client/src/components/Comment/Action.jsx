import React from 'react';
import styled from 'styled-components';
import { convertDate } from './../../helpers/convertDate';

const StyledAction = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
    display: flex;
    align-items: center;
    div {
        display: flex;
        align-items: center;

        :nth-of-type(1) {
            svg {
                margin-bottom: ${({ theme }) => theme.spacing.xxs};
            }
        }
    }
    p {
        ${({ theme }) => theme.typography.caption};
        padding-left: ${({ theme }) => theme.spacing.xxs};
        padding-right: ${({ theme }) => theme.spacing.s};
    }
`;

const Action = ({ stars, createdAt, updatedAt }) => {
    return (
        <StyledAction>
            <div>
                <svg viewBox="-2 -2 25 25" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
                </svg>
                <p>23</p>
            </div>
            <div>
                <svg
                    viewBox="-1 -1 25 25"
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                </svg>
                <p>{convertDate(createdAt)}</p>
            </div>
            <div>
                <svg
                    viewBox="-1 -1 25 25"
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
                </svg>
                <p>Edytowany</p>
            </div>
            {/* <div>{!(createdAt === updatedAt) && <p>Edytowany</p>}</div> */}
        </StyledAction>
    );
};

export default Action;
