import React, { useEffect } from 'react';
import styled from 'styled-components';
import DeleteCross from './DeleteCross.jsx'

const StyledModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #837d83da;
    backdrop-filter: blur(4px);
    z-index: ${({ theme }) => theme.zIndex.level1};
`;
const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: calc(100% - 2 * ${({ theme }) => theme.spacing.xs});
    max-width: 750px;
     padding-right: ${({ theme }) => theme.spacing.l};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textOnBackground};
    box-shadow: 0px 35px 68px 0px rgba(131, 125, 131, 0.5), inset 0px -5px 16px 0px rgba(131, 125, 131, 0.6),
        inset 0px 11px 28px 0px rgb(255, 255, 255);
    border-radius: 5px;
    transform: translate(-50%, -50%);
    z-index: ${({ theme }) => theme.zIndex.level2};
`;

const StyledDeleteCross = styled(DeleteCross)`
position: absolute;
right: 0;
top: 0;
margin: ${({ theme }) => theme.spacing.xs};
`

const Modal = ({ children, closeModal }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <>
            <StyledModalBackground onClick={closeModal} />
            <StyledModal> <StyledDeleteCross onClick={closeModal} />{children}</StyledModal>
        </>
    );
};

export default Modal;
