import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../feature/userSlice.js';

import Input from '../../components/utils/Input';
import RadioButton from '../../components/Register/RadioButton';
import Button from '../../components/utils/Button';

const StyledForm = styled.form`
    margin: ${({ theme }) => theme.spacing.s} 0;
    padding: 0 ${({ theme }) => theme.spacing.m};
    width: 100%;
    max-width: 350px;
`;

const InputContainer = styled.div`
    width: 100%;
    overflow: hidden;

    > p {
        margin: ${({ theme }) => theme.spacing.xs} 0;
    }
`;

const ButtonContainer = styled.div`
    margin-top: ${({ theme }) => theme.spacing.s};
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.s};
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const StyledRadioArea = styled.div`
    > div {
        width: 50%;
        > input {
            border-radius: 5px 0 0 5px;
        }
        :nth-of-type(2) {
            input {
                border-radius: 0 5px 5px 0;
            }
        }
    }
`;

function Form() {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            role: 'student',
            email: '',
            username: '',
            password: '',
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            dispatch(signup(values));
            // console.log(values);
        },
        enableReinitialize: true,
    });

    userStore.user && navigate('/home');

    return (
        <>
            <StyledForm onSubmit={formik.handleSubmit}>
                <InputContainer>
                    {/* <p>typ użytkownika</p> */}
                    <StyledRadioArea role="group" aria-labelledby="my-radio-group">
                        <RadioButton
                            placeholder="uczeń"
                            id="student"
                            name="role"
                            onChange={formik.handleChange}
                            checked
                            value="student"
                        />
                        <RadioButton
                            placeholder="nauczyciel"
                            id="teacher"
                            name="role"
                            onChange={formik.handleChange}
                            value="teacher"
                        />
                    </StyledRadioArea>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={userStore.error?.email}
                    />
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="nazwa użytkownika"
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        error={userStore.error?.username}
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
                        error={userStore.error?.password}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">Załóż konto</Button>
                    <StyledLink to="/login">
                        <Button type="button" option="ghost">
                            Zaloguj się
                        </Button>
                    </StyledLink>
                </ButtonContainer>
            </StyledForm>
        </>
    );
}

export default Form;
