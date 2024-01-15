// import React from 'react'
// import "./card.css"
// import moment  from 'moment';
// import { useDispatch } from 'react-redux';
// import {deleteExpense } from "../../redux/actions/expenses";
// const Card = ({item}) => {
//   const time=moment(item.createdAt).fromNow();
  
//   const dispatch = useDispatch();
//   const handledelete=()=>{
//     dispatch(deleteExpense(item));
//   }
//   return (
//     <div className="card">
//       {/* <h4>
//         {props.item.title}
//       </h4> */}
//       <div className="card-image-container">
//         <img src ={item.category.icon} alt ={item.category.title} className="card-image"></img>

//       </div>
//       <div className="card-info">
//      <label className="card-title">{item.title}</label>
//      <label className="card-time">{time}</label>
//       </div>
//       <div className="card-right">
//         <div>
//             <label className="card-amount">₹{item.amount}</label>
//         </div>
//         <div className="delte-icon" onClick ={handledelete}>
//         <i class=" fi-rr-trash"></i>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card
import React from 'react';
import "./card.css";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from "../../redux/actions/expenses";

const Card = ({ item }) => {
  const time = moment(item.createdAt).fromNow();
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
  }

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={item.category.icon} alt={item.category.title} className="card-image" />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹{item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i className="fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;