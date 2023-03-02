import React, { useState } from "react";

import { Card, CardBody, CardFooter, Text, Input, Select, Flex, Button} from '@chakra-ui/react';
import { useSelector } from "react-redux";

const Filter = ({filteredExpenses, setFilteredExpenses}) => {

    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");

    const store = useSelector((state) => state);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "month") {
            setMonth(value);
        }else if(name === "year") {
            setYear(value);
        }else {
            setType(value);
        }
    };

    const handleFilter = () => {
        console.log(filteredExpenses);
        const newData = store.filter((expenseObj) => {
            if(expenseObj.expenseType === type.toUpperCase()) 
                return expenseObj;
        });
        setFilteredExpenses(newData);
    }

    return (
        <Card size="md" mr={12} ml={12} mt={30} mb={30}>
            <CardBody>
                <Flex justifyContent="space-between">
                    <Flex flexDirection="column" mr={2} ml={2}>
                        <Text mb="8px">Month: </Text> 
                        <Input value={month} name="month" onChange={handleChange} placeholder="Email month..." size="sm" width="300px"/>
                    </Flex>
                    <Flex flexDirection="column" mr={2} ml={2}>
                        <Text mb="8px">Year: </Text>
                        <Input value={year} name="year" onChange={handleChange} placeholder="Email year..." size="sm" width="300px"/>
                    </Flex>
                    <Flex flexDirection="column" mr={2} ml={2}>
                        <Text mb="8px">Expense Type: </Text>
                        <Select name="type" value={type} onChange={handleChange} placeholder="Select option" size="sm" width="300px">
                            <option value="INCOME">Income</option>
                            <option value="EXPENSE">Expense</option>
                        </Select> 
                    </Flex>
                    <Button size="sm" colorScheme='blue' mr={2} ml={2} onClick={handleFilter}>Search</Button>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default Filter;