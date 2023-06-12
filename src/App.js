import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Registeration from './Components/Registeration';
import Home from "./Components/Home/Home";
import ViewFiles from "./Components/View Files/ViewFiles";
import AddNewFile from "./Components/Add New File/AddNewFile";
import Logout from "./Components/Logout/Logout";
import AddInstallment from "./Components/Add Installment/AddInstallment";
import PlotsForm from './Components/View Files/plots';
import ArrayField from './Components/View Files/FieldArray';
import Modal from './Components/View Files/ModalViewInstallment';
import UpdateFile from './Components/Add New File/updateFile';
import ModalUpdate from './Components/Add Installment/ModalAddInstallment';
import Dashboard from './Components/Dashboard';
import PaginatedItems from './Components/Add Installment/pagination';
import PaginatedItemss from './Components/View Files/ViewFiles';
import RecipesAdmin from './Components/Add New File/RecipesAdmin';
import AddCommunities from './Components/Add New File/AddCommunities';
import PaginatedItemsss from './Components/View Files/UpdateCommunities';
import UpdateCommunities from './Components/View Files/UpdateCommunities1';
import AboutItems from './Components/View Files/ViewAboutus';
import ViewImageProductFiles from './Components/View Files/UpdateCommunities';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/register" element={<Registeration/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="Home" element={<Home />}/>
        {/* <Route path="Login" element={<Login/>}/> */}
        <Route path="/AddNewFile" element={<AddNewFile/>}/>
       
        <Route path="AddInstallment" element={<AddInstallment />}/>
        <Route path="Logout" element={<Logout/>}/>
        <Route path="/plots" element={<PlotsForm/>}/>
        <Route path="/array" element={<ArrayField/>}/>
        <Route path="/ViewFiles" element={<PaginatedItemss itemsPerPage={20}/>}/>
        <Route path="/Viewcommunities" element={<ViewImageProductFiles/>}/>
        <Route path="/aboutus" element={<AboutItems itemsPerPage={20}/>}/>
        <Route path="/installments/:id" element={<Modal/>}/>
        <Route path="/update/:id" element={<UpdateFile/>}/>
        <Route path="/modal/:id" element={<ModalUpdate/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/addrecipes" element={<RecipesAdmin/>}/>
        <Route path="/addcommunities" element={<AddCommunities/>}/>
        <Route path="/updatecommunities/:id" element={<UpdateCommunities/>}/>
        

      </Routes>
   
    </Router>
    </>
    
  )
 
}

export default App