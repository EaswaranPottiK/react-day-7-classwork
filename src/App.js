import './App.css';
import { useState, useTransition } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from './List';

function App() {

  const [itemList, addItemList] = useState([])

  const AddItem = (e) =>{
    var textField= document.getElementById('textField').value
    if (textField==''){
      toast.error('Please Provide Value', {
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
    else{
      toast.success("Item Added To The List", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        addItemList([...itemList,{textField:textField,isChecked:false}])

    }
  }
  function deleteCard(){

  }
  return (
    <div style={{marginTop:'100px'}}>
      <div  className='mainDiv'>
        <p style={{fontSize:'x-large'}}>Grocery Bud</p>
        <div style={{display:'flex',marginBottom:'40px',height:'28px'}}>
          <input id="textField" type='text' style={{width:'250px'}}></input>
          <button onClick={AddItem} style={{backgroundColor:'#06B6D4', border:'none' ,borderRadius:'0 4px 4px 0',color:'white',padding:'0 15px',cursor:'pointer'}}>Add Item</button>
        </div>
        <ToastContainer />

        <div>
          {itemList.map((item,count) => (
            <List item={item.textField} id={count}  itemList={itemList} addItemList={addItemList} count={count}/>
          ))}
        </div>

      </div>
      {/* style={{display:'flex',marginLeft:'39%',width:'450px'} */}

    </div>
  );
}

export default App;
