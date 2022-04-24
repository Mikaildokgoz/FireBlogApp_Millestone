import {toast} from "react-toastify";



export const successToastNotify = (msg) => {
  
  toast.success('msg', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }) 
  }
