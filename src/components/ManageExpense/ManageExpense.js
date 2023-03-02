import React, { useState } from "react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Card,
    Badge,
    Button
} from '@chakra-ui/react';
import Filter from "./Filter.js";
import { INITIAL_STORE } from "../../store/index.js";
import { DELETE_EXPENSE } from "../../store/action.js";
import Nav from "../Nav/Nav.js";

const ManageExpense = () => {

    const store = useSelector((state) => state);

    const [expenses, setExpenses] = useState(store);
    const [filteredExpenses, setFilteredExpenses] = useState(store);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch({type: DELETE_EXPENSE, id: id});
    };

    return (
        <div>
            <Nav />
            <Filter filteredExpenses={filteredExpenses}  setFilteredExpenses={setFilteredExpenses}/>
            <Card size="md" mr={12} ml={12} mt={30} mb={30}>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>S.No</Th>
                                <Th>Title</Th>
                                <Th>Amount</Th>
                                <Th>Expense Type</Th>
                                <Th>Date</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { store.map((expenseObj, idx) => {
                                return (
                                    <Tr key={uniqid()}>
                                        <Td>{idx+1}</Td>
                                        <Td>{expenseObj.title}</Td>
                                        <Td>{expenseObj.amount}</Td>
                                        <Td><Badge colorScheme={expenseObj.expenseType === "EXPENSE" ? "red" : "green"}>{expenseObj.expenseType}</Badge></Td>
                                        <Td>{expenseObj.date}</Td>
                                        <Td>
                                            <Button size="sm" leftIcon={<DeleteIcon />} colorScheme="red" onClick={() => handleDelete(expenseObj.id)} >Delete</Button>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    );
};

export default ManageExpense;
