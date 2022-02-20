import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import brandImg from '@assets/brand.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
    useAuth
} from '@hooks/auth';

import {
    Container,
    Content,
    Title,
    Brand,
    ForgotPasswordButton,
    ForgotPasswordLabel
} from './styles';
import { useEffect } from 'react';

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, isLogging, forgotPassword } = useAuth();

    function handleSignIn() {
        signIn(email, password);
    }

    function handleForgotPassword() {
        forgotPassword(email);
    }

    return (
        <Container >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Content>

                    <Brand source={brandImg} />
                    <Title>Login</Title>

                    <Input
                        placeholder="Email"
                        type='secondary'
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                    />

                    <Input
                        placeholder="Password"
                        type='secondary'
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />

                    <ForgotPasswordButton
                        onPress={handleForgotPassword}
                    >
                        <ForgotPasswordLabel>Forgot your password?</ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button
                        title="Sign In"
                        type='secondary'
                        onPress={handleSignIn}
                        isLoading={isLogging}
                    />
                </Content>
            </KeyboardAvoidingView>
        </Container>
    );
}