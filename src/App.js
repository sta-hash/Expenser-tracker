import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AddExpense from './page/add-expense';
import Home from './page/home';


const  App = ()=> {
  
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="add-expense" element={<AddExpense />} />
      </Routes>
      
      <div>footer</div>
    </BrowserRouter>
  );
  }
export default App
