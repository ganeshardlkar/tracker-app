import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_EXPENSE, DELETE_EXPENSE } from "../../store/action"; 
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Card,
    Input,
    Select,
    InputLeftElement,
    InputGroup,
    Heading,
    CardBody,
    Button
} from '@chakra-ui/react';
import { PATHS } from "../../paths";

const AddExpense = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        expenseType: "",
        amount: 0,
        date: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        dispatch({ type: ADD_EXPENSE, data: formData });
        navigate(PATHS.MANAGE_EXPENSE);
    }

    return (
        <div>
            <Card size="md" mr={60} ml={60} mb={30}>
                <CardBody>
                    <Heading>Add Expense</Heading>
                    <FormControl mt={4}>
                    <FormLabel>Title</FormLabel>
                    <Input type='text' name="title" value={formData.title} onChange={handleChange} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Desc</FormLabel>
                        <Input type='text' name="description" value={formData.description} onChange={handleChange} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Expense Type</FormLabel>
                        <Select name="expenseType" value={formData.expenseType} placeholder='Select option' size="sm" width="300px">
                            <option value='INCOME'>Income</option>
                            <option value='EXPENSE'>Expense</option>
                        </Select>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Amount</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='INR'
                            />
                            <Input type='number' name="amount" value={formData.amount} onChange={handleChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Date</FormLabel>
                        <Input placeholder="Select date and time" size="md" name="date" value={formData.date} onChange={handleChange} type="date" />
                    </FormControl>
                    <FormControl mt={4}>
                        <Button size="sm" colorScheme='blue' onClick={handleSubmit}>Add</Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddExpense;