import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Input from '../../components/utils/Input';
import Button from '../../components/utils/Button';

const Form = styled.form`
    margin: 15px 0;
    width: 100%;
    /* height: fit-content; */
`;

const InputContainer = styled.div`
    width: 80%;
    position: relative;
    top: -17vh;
    left: 10%;
    overflow: hidden;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    top: -10vh;
    left: 0;
`;

function StyledForm() {
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
            <Form onSubmit={formik.handleSubmit}>
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
                    <Button type="submit" />
                </ButtonContainer>
            </Form>
        </>
    );
}

export default StyledForm;
