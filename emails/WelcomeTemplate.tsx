import React, { CSSProperties } from 'react';
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome Aboard!</Preview>
            <Tailwind>
                <Body style={body}>
                    <Container>
                        <Text className="font-bold text-3xl">Hello {name}</Text>
                        <Link href='https://www.eriktimmers.eu'>eriktimmers.eu</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

const body: CSSProperties = {
    background: "#fff"
}

const heading: CSSProperties = {
    fontSize: '32px'
}

export default WelcomeTemplate;