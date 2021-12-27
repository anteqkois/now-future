import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Close } from '../../assets/close.svg';

import Input from '../../components/utils/Input'
import Button from '../../components/utils/Button'

const SearchContainer = styled.div`
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

function SearchFilters() {
    return (
        <>
            <SearchContainer>
                <InputContainer>
                    <Input 
                        type="text"
                        placeholder="Wpisz frazę:"
                    />  
                </InputContainer>

                <CloseContainer>
                    <Close />
                </CloseContainer>

                <CategoriesContainer>
                    <Category
                        type="radio"

                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                    <Category
                        type="radio"
                    />
                </CategoriesContainer>
               
                <ButtonContainer>
                    <Button>
                        Szukaj
                    </Button>
                </ButtonContainer>

                
            </SearchContainer>     
        </>
    )
}

export default SearchFilters
