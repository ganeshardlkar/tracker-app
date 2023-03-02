import { createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const INITIAL_STORE = [
    {
        id: "1",
        title: "Swiggy Order",
        description: "I was feeling hungry",
        expenseType: "EXPENSE",
        amount: "20000",
        date: "2023-02-10"
    },
    {
        id: "2",
        title: "Zomato Order",
        description: "I was feeling hungry",
        expenseType: "INCOME",
        amount: "20000",
        date: "2023-02-10"
    },
    {
        id: "3",
        title: "Blinkit Order",
        description: "I was feeling hungry",
        expenseType: "EXPENSE",
        amount: "20000",
        date: "2023-02-10"
    }
];

export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());