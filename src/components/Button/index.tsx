import React from 'react';

import {
    RectButtonProps
} from 'react-native-gesture-handler';

import {
    Container,
    Loading,
    Title,
    TypeProps
} from './styles';

type Props = RectButtonProps & {
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
        <Container type={type} enabled={isLoading} {...rest}>
            {isLoading ? (
                <Loading />
            ) : (
                <Title>{title}</Title>
            )}
        </Container>
    );
}