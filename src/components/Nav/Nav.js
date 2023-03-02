import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
    Card,
    Button,
    CardBody,
    Text,
    Flex
} from '@chakra-ui/react';
import { PATHS } from '../../paths';

const Nav = () => {

    const navigate = useNavigate();

    return (
        <Card mb="50px">
            <CardBody>
                <Flex justifyContent="space-between" alignItems="center">
                    <Text color="dodgerblue" fontWeight="800" fontSize="2em">Money Movement Tracker</Text>
                    <div>
                        <Button size="sm" mr="50px" colorScheme="blue" onClick={() => {
                            navigate(PATHS.ADD_EXPENSE);
                        }} >Add Expense</Button>
                        <Button size="sm" mr="20px" colorScheme="red" onClick={() => {
                            window.localStorage.clear();
                            navigate(PATHS.LOGIN);
                        }} >Logout</Button>
                    </div>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default Nav;