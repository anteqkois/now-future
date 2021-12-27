import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    all: unset;
    padding: 0.5em 1em;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.sizeH6};
    color: ${({ theme, option }) => {
        let property = '';
        switch (option) {
            case 'normal':
                property = theme.colors.textOnPrimary;
                break;
            // case 'white':
            //     property = theme.colors.accent;
            //     break;
            case 'ghost':
                property = theme.colors.textOnSecondary;
                break;

            default:
                break;
        }
        return property;
    }};
    background: ${({ theme, option }) => {
        let property = '';

        switch (option) {
            case 'normal':
                // property = 'linear-gradient(35.25deg, #4d0a83 38.05%, #a2141b 90%)';
                property = 'linear-gradient(15deg, rgba(98,0,238,1) 40%, rgba(48,0,116,1) 80%)';
                // property = 'linear-gradient(15deg, rgba(102,0,116,1) 40%, rgba(38,0,43,1) 80%)';
                break;
            // case 'white':
            //     property = theme.colors.textOposite;
            //     break;
            case 'ghost':
                property = theme.colors.surface;
                break;

            default:
                break;
        }
        return property;
    }};
    background-size: 150%;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease 0s;
    cursor: pointer;
    outline: none;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        border-radius: 5px;
        box-shadow: ${({ theme, option }) => {
            let property = '';

            switch (option) {
                case 'normal':
                    property = `0px 5px 15px ${theme.colors.primaryVariant}`;
                    break;
                // case 'white':
                //     property = `0px 5px 15px -5px ${theme.colors.textOposite}`;
                //     break;
                case 'ghost':
                    property = `0px 5px 15px ${theme.colors.textOnSecondary}`;
                    break;

                default:
                    break;
            }
            return property;
        }};
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
    }

    :hover,
    :focus {
        background-position: right;

        ::before {
            opacity: 1;
            transition: opacity 0.4s ease-in-out;
        }
    }
`;

const Button = ({ children, className, onClick = null, option = 'normal' }) => {
    const button = useRef(null);

    const handleClick = () => {
        button.current.blur();
        onClick && onClick();
    };

    return (
        <StyledButton ref={button} onClick={handleClick} className={className} option={option}>
            {children}
        </StyledButton>
    );
};

export default Button;
