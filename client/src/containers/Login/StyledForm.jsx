import React from 'react'
import styled from 'styled-components'

import Input from '../../components/utils/Input'


const Form = styled.form`
    position: absolute;
    top: 10rem;
    height: 2rem;
    width: 100%;
    background: red;
`

function StyledForm() {
    return (
        <>
            <Form>
                <Input />
            </Form>
        </>
    )
}

export default StyledForm
