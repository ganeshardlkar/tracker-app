import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, CardBody, Text, Heading, Input, Center, Button } from '@chakra-ui/react';
import { client } from "../../client";
import { PATHS } from "../../paths";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === "email" ? setEmail(value) : setPassword(value);
    };

    const handleLogin = () => {
        const body = { email, password };
        client.post("/login", body)
        .then(resp => {
            window.localStorage.setItem("token", resp.data.token);
            navigate(PATHS.MANAGE_EXPENSE);
        });
    }

    return (
        <Center bg="lightBlue" width={"100vw"} height={"100vh"}>
            <Card variant="elevated" width={"400px"} height={"400px"}>
                <CardHeader>
                    <Heading textAlign="center" mt="10px" size="md">Login</Heading>
                </CardHeader>
                <CardBody>
                    <>
                        <Text mb="8px">Email: </Text>
                        <Input value={email} name="email" onChange={handleChange} placeholder="Email comes here..." size="sm"/>
                    </>
                    <>
                        <Text mt={6} mb="8px">Password: </Text>
                        <Input value={password} name="password" onChange={handleChange} placeholder="Password comes here..." size="sm"/>
                    </>
                    <Button m="50px 133px 0px 133px" width="90px" colorScheme='blue' onClick={handleLogin}>Login</Button>
                </CardBody>
            </Card>
        </Center>
    )
}

export default Login;