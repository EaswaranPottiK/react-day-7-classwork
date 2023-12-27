import React, { useState } from 'react'

const List = (prop) => {
    const [checkBox,setCheckBox] = useState(false)
    const checkboxChange =(e)=>{
        setCheckBox(!checkBox)
    }
    const deleteCard =()=>{
      let updatedList=[...prop.itemList]
      updatedList.splice(prop.count,1)
      prop.addItemList(updatedList)
    }
  return (
    <div id={prop.count} style={{display:'flex',alignItems:'center',gap:'30vh'}}>
        <div style={{display:'flex'}}>
            <input type='checkbox' value={checkBox} onChange={checkboxChange}></input>
            <p style={{marginLeft:'10px',textDecoration: checkBox? 'line-through':'none'}}>{prop.item}</p>
        </div>
        <div>
            <button onClick={deleteCard} style={{backgroundColor:'black',color:'white',border:'none',borderRadius:'6px',cursor:'pointer',padding:'3px 5px'}}>Delete</button>
        </div>
    </div>
  )
}

export default List