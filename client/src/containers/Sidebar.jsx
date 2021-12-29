import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Home } from '../assets/home.svg'
import { ReactComponent as Pen } from '../assets/pen.svg'
import { ReactComponent as Notes } from '../assets/notes.svg'
import { ReactComponent as Discussion } from '../assets/discussion.svg'
import { ReactComponent as Statistics } from '../assets/statistics.svg'
import { ReactComponent as Logout } from '../assets/logout.svg'


const StyledSidebar = styled.div`
    width: 250px;
    height: 100%;
    /* background: red; */
    background: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: 72px;
    left: 0;
    text-align: left;
    z-index: ${({ theme }) => theme.zIndex.level2};
`
const StyledNavItem = styled.a`
    color: ${({ theme }) => theme.colors.textOnBackground};
    /* box-shadow: 0 0 5px #eee; */
    display: flex;
    flex: direction: row;
    opacity: 0.9;
    margin: 15px 0 0 0;
    padding: 15px 15px;
    border-radius: 0 10px 10px 0;
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.grey};
      opacity: 1;
      transition: .3s ease;
    }

    &:first-child {
        margin-top: 20px;
    }
`

const StyledNavItemText = styled.p`
    font-size: ${({ theme }) => theme.typography.subtitle1};
    padding-left: 20px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 90px 0;
`

const StyledLogoutItem = styled.a`
    display: flex;
    /* background-image: linear-gradient(to right, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryVariant}  51%, ${({ theme }) => theme.colors.primary}  100%); */
    /* background-size: 200% auto; */
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.textOnBackground};
    box-shadow: 2px 5px 5px ${({ theme }) => theme.colors.primaryVariant};
    transition: .3s ease;
    padding: 15px 15px;
    border-radius: 0 10px 10px 0;

    &:hover {
        cursor: pointer;
        /* background-position: right center; */
        text-decoration: none;
        box-shadow: 4px 10px 15px ${({ theme }) => theme.colors.primaryVariant};
    }
`

function Sidebar() {
    return (
        <>
            <StyledSidebar>
                <StyledNavItem>
                    <Home />
                    <StyledNavItemText>Strona Główna</StyledNavItemText>
                </StyledNavItem>
                <StyledNavItem>
                    <Pen />
                    <StyledNavItemText>Zadaj pytanie</StyledNavItemText>
                </StyledNavItem>
                <StyledNavItem>
                    <Notes />
                    <StyledNavItemText>Moje wpisy</StyledNavItemText>
                </StyledNavItem>
                <StyledNavItem>
                    <Discussion />
                    <StyledNavItemText>Panel Dyskusyjny</StyledNavItemText>
                </StyledNavItem>
                <StyledNavItem>
                    <Statistics />
                    <StyledNavItemText>Statystyki</StyledNavItemText>
                </StyledNavItem>

                <LogoContainer>
                    <Logo />
                </LogoContainer>

                <StyledLogoutItem>
                    <Logout />
                    <StyledNavItemText>Wyloguj się</StyledNavItemText>
                </StyledLogoutItem>
            </StyledSidebar>
        </>
    )
}

export default Sidebar
