import { Container, Grid, Input, Text } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {

    return (
        <Container md justify="center" display="flex" alignContent="center" css={{ height: '100vh', flexDirection: 'column' }}>
            <Head>
                <title>Login - Prontuário</title>
            </Head>
            <Text h1 css={{marginBottom: 32}}>Prontuário</Text>
            <section>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <Input labelPlaceholder="Email" bordered rounded css={{marginBottom: '32px'}} />
                    <Input.Password labelPlaceholder="Senha" bordered rounded />
                </form>
            </section>
        </Container>
    )
}

export default Login