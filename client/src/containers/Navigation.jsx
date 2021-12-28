import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

import { ReactComponent as NowFuture } from '../assets/nowfuture.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Close } from '../assets/close.svg';

import Input from '../components/utils/Input'
import Button from '../components/utils/Button'


const Navbar = styled.div`
  width: 100%;
  height: 4.5rem;
  /* background: whitesmoke; */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.m};
`

const SearchContainer = styled.div`
 /* a to byłoby dobrze dać całkiem na środek bo flex jakby daje równe spacje między napisem nowfuture a usernamem, wiec ciezko zeby bylo rowno */
  cursor: pointer;
  position: absolute;
  top: 0;
  left: calc(50% - 56px);
  padding: 12px 40px;

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
  font-size: ${({ theme }) => theme.typography.H6};
`

const SearchFilters = styled.div`
    /* dalem to na fixed bo bedzie tak samo jak navbar przylepiony i ponad wszystkim, u know haha  */
    position: fixed;
    width: 450px;
    height: 250px;
    background: whitesmoke;
    margin-left: calc(50% - 225px);
    margin-top: 5rem;
    border-radius: 12px;
`

const InputContainer = styled.div`
    display: flex;
    margin: -5px 40px;
    overflow: hidden;
`

const CloseContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`

const CategoriesContainer = styled.div`
    /* background: red; */
    margin: -20px 20px;
    height: 140px;
`

const Category = styled.input`
    all: unset;
    display: inline-block;
    margin-left: 8px;
    width: 125px;
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
`

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 16px;
    right: 30px;
`

function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? 
        <SearchFilters>
          <InputContainer>
            <Input 
                type="text"
                placeholder="Wpisz frazę:"
            />  
          </InputContainer>

          <CloseContainer onClick={() => setShow(false)}>
              <Close />
          </CloseContainer>

          <CategoriesContainer>
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
            <Category type="radio" />
          </CategoriesContainer>
        
          <ButtonContainer>
              <Button>
                  Szukaj
              </Button>
          </ButtonContainer>
        </SearchFilters>     
      : null} 

      {/* ogólnie to fajnie byłoby dać transition podczas pojawiania sie tych filtrów, aczkolwiek nie wiem jak to zrobic xD */}

      <Navbar>
          <NowFuture />

        <SearchContainer onClick={() => setShow(!show)}>
          <Search />
        </SearchContainer>

        <Username>janowak</Username>
      </Navbar> 
    </>
  )
}

export default Navigation
