import React from 'react';

import {
    TouchableOpacityProps
} from 'react-native';

import {
    Container,
    Loading,
    Title,
    TypeProps
} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: TypeProps;
    isLoading?: boolean;
}

export function Button({
    title,
    type = 'primary',
    isLoading = false,
    ...rest
}: Props) {
    return (
        <Container type={type} {...rest}>
            {isLoading ? (
                <Loading />
            ) : (
                <Title>{title}</Title>
            )}
        </Container>
    );
}