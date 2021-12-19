import React from 'react'
import styled from 'styled-components'

import Input from '../../components/utils/Input'
import Button from '../../components/utils/Button'

const Form = styled.form`
    width: 100%;
    height: fit-content;
`

const InputContainer = styled.div`
    width: 80%;
    height: 50px;
    position: relative;
    top: -17vh;
    left: 10%;
    overflow: hidden;
`

const ErrorContainer = styled.div`
    width: 80%;
    position: relative;
    top: -17vh;
    left: 10%;
`

const ErrorMessage = styled.p`
    font-size: ${({ theme }) => theme.typography.H6};
    color: ${({ theme }) => theme.colors.error};
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    top: -10vh;
    left: 0;
`

function StyledForm() {
    return (
        <>
            <Form>
                <InputContainer>
                    <Input />
                </InputContainer>
                
                <ErrorContainer>
                    <ErrorMessage>error text</ErrorMessage>
                </ErrorContainer>

                <InputContainer>
                    <Input />
                </InputContainer>
                
                <ErrorContainer>
                    <ErrorMessage>error text</ErrorMessage>
                </ErrorContainer>

                <ButtonContainer>
                    <Button />
                </ButtonContainer>
            </Form>

        </>
    )
}

export default StyledForm
