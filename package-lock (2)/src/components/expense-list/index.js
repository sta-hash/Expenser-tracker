import React from 'react'
import "./expense-list.css";
import Card from "./card"
const ExpenseList = () => {
    const list = [
        {
            title: "made a purchase",
            logo: "djhdj",
            createdAt: Date.now(),
            amount: 1324,
        },
        {
            title: "made a NEW purchase",
            logo: "djhdj",
            createdAt: Date.now(),
            amount: 1324,
        }
    ]
    return <div>{list.length ? list.map((item, index) => <Card key={index} item={item} />) : null}</div>
}

export default ExpenseList
