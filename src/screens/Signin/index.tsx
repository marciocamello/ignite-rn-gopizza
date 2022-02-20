import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import brandImg from '@assets/brand.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
    Container,
    Content,
    Title,
    Brand,
    ForgotPasswordButton,
    ForgotPasswordLabel
} from './styles';

export function Signin() {
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
                    />

                    <Input
                        placeholder="Password"
                        type='secondary'
                        secureTextEntry={true}
                    />

                    <ForgotPasswordButton>
                        <ForgotPasswordLabel>Forgot your password?</ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button
                        title="Sign In"
                        type='secondary'
                    />
                </Content>
            </KeyboardAvoidingView>
        </Container>
    );
}