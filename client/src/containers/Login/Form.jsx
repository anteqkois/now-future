import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Input from '../../components/utils/Input';
import Button from '../../components/utils/Button';

const StyledForm = styled.form`
    margin: 15px 0;
    padding: 0 20px;
    width: 100%;
    max-width: 350px;
`;

const InputContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

function Form() {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            //   handleLogin(values);
            console.log(values);
        },
        enableReinitialize: true,
    });

    return (
        <>
            <StyledForm onSubmit={formik.handleSubmit}>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </InputContainer>
                <InputContainer>
                    <Input
                        type="password"
                        placeholder="hasło"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">zaloguj się</Button>
                    <StyledLink to="/register">
                        <Button type="button" option="ghost">
                            Załóż konto
                        </Button>
                    </StyledLink>
                </ButtonContainer>
            </StyledForm>
        </>
    );
}

export default Form;
