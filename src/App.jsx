import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white px-2 sm:px-0">
     <NavBar/>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/collection' element={<CollectionPage />} />
     </Routes>
     
     <ToastContainer/>
      
    </div>
  );
};

export default App;
