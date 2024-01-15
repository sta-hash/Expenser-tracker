import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { toast, ToastContainer, } from 'react-toastify';
import SuccessModal from "./success-modal";
import { addExpense } from "../../redux/actions/expenses";
import './add-form.css';
import { categories } from "../../constants/add-expense";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const AddForm = () => {
    const cat = categories;
    const [categeryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(true);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'pink',
            borderRadius: '12px',
        },
    }
    const dispatch = useDispatch();
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount("");
            return;
        }
        setAmount(val);
    }
    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false)
    }
    const handleSubmit = () => {
        if (title === '' || amount === '' || !category) {
            const notify = () => toast("please enter valid data!");
            notify();

            return;
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date(),
        }
        console.log("here");

        dispatch(addExpense(data));
        setModalOpen(true);

    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <div className="add-form">
            <ToastContainer
                position="bottom"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <Modal isOpen={modalOpen} style={customStyles}>
                
                <div className='modal-inner'>
                    <label>Expense Added Successfully
                        <span><button style={{marginLeft: "5px"}} onClick={handleModalClose}>X </button></span>
                    </label>
                    <img src={require('../../assets/images/added-image.png')} alt='Expense Added' className='added-image' />
                    <Link to='/'>
                        <div className="take-home-button">
                            <i className="fi fi-rs-house-chimney"></i>
                            Home
                        </div>
                    </Link>
                </div>
            </Modal>
            
            <div className="form-item">
                <label>Title</label>
                <input placeholder="give a name to your expenditure" value={title} onChange={(e) => handleTitle(e)}></input>

            </div>
            <div className="form-item">
                <label>Amount ₹</label>
                <input value={amount} placeholder="Enter amount" className='amount-input' onChange={(e) => handleAmount(e)}></input>
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => setCategoryOpen(!categeryOpen)}>
                        <label>{category ? category.title : "category"}</label>
                        <i class=" fi-br-angle-down"></i>
                    </div>
                    {categeryOpen && <div className="category-container">
                        {cat.map(category => (
                            <div className="category-item" style={{
                                borderRight: '5px solid ${category.color}'
                            }} key={category.id} onClick={() => handleCategory(category)}>

                                <label style={{padding: "10px"}}>{category.title}</label>
                                <img src={category.icon} alt={category.title} style={{width: "70px", padding: "10px"}} />
                            </div>))}
                    </div>}
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="fi fi-rs-paper-plane"></i>

                </div>
            </div>
        </div>
    )
}

export default AddForm;
