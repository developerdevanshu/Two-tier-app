import React,{useState,useEffect} from 'react'
import axios from 'axios'


const App = () => {
  const [productsData,setProductData] = useState([])
  useEffect(() => {
    axios
    .get("http://localhost:8000/data")
    .then((res)=>{
     
      setProductData(res.data.products);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      {productsData && productsData.length > 0 ? (
        productsData.map((el,ind) => <p key={ind} > {el }</p>)
      ) : (
        <p>Loading</p>
      )}
        </div>
  );
};

export default App