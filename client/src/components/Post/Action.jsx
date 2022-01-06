import React from 'react';
import styled from 'styled-components';

const StyledAction = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
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
        padding-block: ${({ theme }) => theme.spacing.s};
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

    ${({ theme }) => theme.media.bigPhone} {
        justify-content: space-around;
    }
`;

const Action = ({ handleAddStarPost, haveStar }) => {
    return (
        <StyledAction>
            <div onClick={handleAddStarPost}>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    // fillRule="evenodd"
                    clipRule="evenodd"
                    stroke={haveStar ? '#be9c03' : '#000000'}
                    fill={haveStar ? '#be9c03' : 'transparent'}
                >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                <p>Super !</p>
            </div>
            <div>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
                </svg>
                <p>Komentarz</p>
            </div>
            <div>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z" />
                </svg>
                <p>Zapisz</p>
            </div>
        </StyledAction>
    );
};

export default Action;
