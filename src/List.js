import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = (prop) => {
    const [checkBox,setCheckBox] = useState(false)
    const checkboxChange =(e)=>{
        setCheckBox(!checkBox)
    }
    const deleteCard =()=>{
      let updatedList=[...prop.itemList]
      updatedList.splice(prop.count,1)
      prop.addItemList(updatedList)

      toast.success("One task deleted successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


    }
  return (
    <>
    <div id={prop.count} style={{display:'flex',alignItems:'center',gap:'30vh'}}>
        <div style={{display:'flex'}}>
            <input type='checkbox' value={checkBox} onChange={checkboxChange}></input>
            <p style={{marginLeft:'10px',textDecoration: checkBox? 'line-through':'none'}}>{prop.item}</p>
        </div>
        <div>
            <button onClick={deleteCard} style={{backgroundColor:'black',color:'white',border:'none',borderRadius:'6px',cursor:'pointer',padding:'3px 5px'}}>Delete</button>
        </div>
     
    </div>
    <ToastContainer />
    </>
  )
}

export default List