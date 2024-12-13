import { useEffect, useState } from 'react';
import './App.css';

function App() {
   
     let[products,setproducts] =useState([]);
     useEffect(()=>{
       onGetproducts();
      },[]);
     let onGetproducts = async ()=>{
       console.log("onGetproducts");
    /*type of the reqest*/
      let reqOptionsc ={
       methhod:"GET"
      }

     let JSONData = await fetch("https://fakestoreapi.com/products", reqOptionsc);
      console.log(JSONData);
     let JSOData = await JSONData.json();
     setproducts(JSOData);
     console.log(JSOData);

  }
  return (
    <div className="App">
<div>
      <button className='bn1' onClick={()=>{
        onGetproducts();
        
      }}>Get products</button>
      </div>
      <div className='pr2'>

    
    {products.map((ele,i)=>{
      return <div className='pdiv'>
        <p>{ele.title}</p>
        <img src={ele.image} className='pimg'title={ele.description}></img>
        <p>Price : $ {ele.price} </p>
        <p> Rating :{ele.rating.rate}</p>
        
        
      
      </div>
      })}
      </div>
    </div>
    
  );
}

export default App;
