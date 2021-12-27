import React from 'react'
import styled from 'styled-components'

import { ReactComponent as NowFuture } from '../assets/nowfuture.svg';
import { ReactComponent as Search } from '../assets/search.svg';

import SearchFilters from './Search/SearchFilters'


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

const SearchContainer = styled.a`
  cursor: pointer;
  position: relative;
  padding: 0.7rem 2.5rem;
  border-radius: 12px 12px 0 0;

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

function Navigation() {
  return (
    <>
      <Navbar>
          <NowFuture />

        <SearchContainer>
          <Search />
        </SearchContainer>

        <Username>janowak</Username>
      </Navbar> 
      
      <SearchFilters />
    </>
  )
}

export default Navigation
