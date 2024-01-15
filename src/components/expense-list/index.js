import React from 'react'
import "./expense-list.css";
import {useSelector} from 'react-redux';
import Card from "./Card"
const ExpenseList = () => {
    const {expenseList : list}= useSelector((state)=>state.expenses);
    // console.log(expenses);
    return <div>{list.length ? list.map((item, index) => <Card key={index} item={item} />
    /* // return <div className ='expense-list'>
    //     {list.length?list.map(item=>(
    //         <Card item={item}/>
    //     ) */
        ):(<div  className='empty-state'>
            <img src ={require('../../assets/images/empty.png')} alt = 'Empty List' className='empty-image'/>
            <label>uh oh ! your expense list is empty</label>

           </div>) }

    </div>
}

export default ExpenseList
