import React from 'react';
import { Container, Form, Form1, FormButton, FormContent, FormInput, Formlabel, FormWrap, Icon, Text } from './SignInElements';

const SignInComponents = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>diu Cash</Icon>

                    <FormContent>
                        <Form action='#'>
                            <Form1>
                                Sign in to your account
                            </Form1>
                            <Formlabel htmlFor='for'>
                                Email
                            </Formlabel>
                            <FormInput type='email'>
                            </FormInput>
                            <Formlabel htmlFor='for'>
                                Password
                            </Formlabel>
                            <FormInput type='password'>
                            </FormInput>
                            <FormButton type='submit'>
                                Continue
                            </FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>
    );
};

export default SignInComponents;