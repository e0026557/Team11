import React from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  return (
    <ToastContainer
      position='top-right'
      hideProgressBar={true}
    />
  );
};

export default Toastify;