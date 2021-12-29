import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

import { ReactComponent as NowFuture } from '../assets/nowfuture.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Close } from '../assets/close.svg';
import { ReactComponent as Toggle } from '../assets/toggle.svg';

import Input from '../components/utils/Input'
import Button from '../components/utils/Button'
import Sidebar from './Sidebar';


const Navbar = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.spacing.xl5};
    background: ${({ theme }) => theme.colors.lightGrey};
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing.m};
`;

const ToggleContainer = styled.div`
  display: flex;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet} {
    display: ${props => props.display.value};
  }
`

const NameContainer = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet} {
    display: ${props => props.display.value};
  }
`

const SearchContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 8px;
  left: calc(50% - 56px);
  padding: 12px 40px;
  /* todo: wysrodkowac poziomo teraz XDDD */

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    width: 100% ;
    bottom: 0;
    left: 0 ;
    background-color: ${({ theme }) => theme.colors.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const Username = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.typography.H6};
`

const SearchFilters = styled.div`
    position: fixed;
    width: 300px;
    height: 325px;
    background: ${({ theme }) => theme.colors.lightGrey};
    margin-left: calc(50% - 150px);
    margin-top: 5rem;
    border-radius: 12px;
    z-index: ${({ theme }) => theme.zIndex.level3};

    ${({ theme }) => theme.media.tablet} {
        /* dalem to na fixed bo bedzie tak samo jak navbar przylepiony i ponad wszystkim, u know haha  */
        width: 450px;
        height: 250px;
        margin-left: calc(50% - 225px);
    }
`;

const InputContainer = styled.div`
    display: flex;
    margin: 0 30px;
    overflow: hidden;
`

const CloseContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`

const CategoriesContainer = styled.div`
    margin: -20px 20px;
    height: 140px;
`

const Category = styled.input`
    all: unset;
    display: inline-block;
    margin-left: 8px;
    width: 115px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.colors.textOnBackground};
    border-radius: 22px;
    box-sizing: border-box;
    cursor: pointer;

    :checked {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textOnPrimary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => theme.media.tablet} {
      width: 125px
    }
`

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 16px;
    right: 30px;
`

function Navigation() {
  const [filters, setFilters] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {filters ? 
        <SearchFilters>
          <InputContainer>
            <Input 
                type="text"
                placeholder="Wpisz frazę:"
            />  
          </InputContainer>

          <CloseContainer onClick={() => setFilters(false)}>
              <Close />
          </CloseContainer>

          <CategoriesContainer>
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
            <Category type="checkbox" />
          </CategoriesContainer>
        
          <ButtonContainer>
              <Button>
                  Szukaj
              </Button>
          </ButtonContainer>
        </SearchFilters>     
      : null} 

      {
        sidebar ?
          <Sidebar />
        : null
      }

      {/* ogólnie to fajnie byłoby dać transition podczas pojawiania sie tych filtrów, aczkolwiek nie wiem jak to zrobic xD */}

      <Navbar>
        <NameContainer display={{ value: "flex" }}>
          <NowFuture />
        </NameContainer>

        <ToggleContainer display={{ value: "none"}} onClick={() => setSidebar(!sidebar)}>
          <Toggle />
        </ToggleContainer>

        <SearchContainer onClick={() => setFilters(!filters)}>
          <Search />
        </SearchContainer>

        <Username>janowak</Username>
      </Navbar> 
    </>
  )
}

export default Navigation
