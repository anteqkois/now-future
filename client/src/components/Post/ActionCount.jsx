import React, { useCallback } from 'react';
import styled from 'styled-components';

const StyledActionCounts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        ${({ theme }) => theme.typography.caption};
        padding-inline: ${({ theme }) => theme.spacing.xs};
        padding-block: ${({ theme }) => theme.spacing.xxs};

        :nth-of-type(2) {
            cursor: pointer;
        }
    }
`;

const ActionCount = ({ amountOfStars, amountOfComments, setShowComments }) => {
    const commentString = useCallback(() => {
        const lastDigit = amountOfComments % 10;

        if (amountOfComments === 1) {
            return 'komentarz';
        } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
            return 'komentarze';
        }
        return 'komentarzy';
    }, [amountOfComments]);
    return (
        <StyledActionCounts>
            <p>{amountOfStars} super</p>
            <p
                onClick={() => {
                    setShowComments((prev) => !prev);
                }}
            >{`${amountOfComments} ${commentString()}`}</p>
        </StyledActionCounts>
    );
};

export default ActionCount;
