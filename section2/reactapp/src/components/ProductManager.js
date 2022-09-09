import React, { useEffect }   from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import Updateproduct from './Updateproduct';



const ProductManager = () => {
  const [productList, setproductList] = useState([]);
  const [productFormData, setproductFormData] = useState(null)
  const [showForm, setshowForm] = useState(false)

  const getDataFromBackend = async () => {

      const response  =  await fetch('http://localhost:5000/product/getall');
      const data = await response.json();
      console.log(data);
      setproductList(data);
      console.log('request sent');
  }
  useEffect(() => {
    getDataFromBackend();
   
  }, [])

  const  deleteProduct = async(id) => {
   const response = await fetch('http://localhost:5000/product/delete/'+id,{
         method : 'DELETE'
})
    console.log(response.status);
    getDataFromBackend();

    toast('product deleted ',
  {
    icon: '✂',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
}

 
  const editProduct = (productdata) => {
    console.log(productdata);
    setproductFormData(productdata);
    setshowForm(true);
    
  }
 

   const showProduct = () => {
    return <table className='table talbe-white tanle-striped'>
        <thead>
            <tr>
                <th>ID </th>
                <th>Product Name</th>
                <th>Company Name</th>
                <th>Price </th>
                <th>Update</th>
                <th>Delete </th>
            </tr>

        </thead>
        <tbody>
            {

                productList.map((product)=>(
                   <tr>
                     <td>{product._id}</td>
                     <td>{product.productname}</td>
                     <td>{product.companyname}</td>
                     <td>{product.price}</td>
                     <td>
                        <button  onClick={() => {editProduct(product)}}  className='btn btn-primary' > <i class="fas fa-edit    "></i> </button>
                     </td>
                     <td>
                        <button  onClick={() => {deleteProduct(product._id)}} className='btn btn-primary' > <i class="fas fa-trash-alt"></i> </button>
                     </td>
                 </tr> 
                ))


            
            }
        </tbody>
    </table>

    
   }
  return (
    <div className='container'>  
      <h1 className='text-center'> Product Manager</h1>
      <button onClick={getDataFromBackend} > refresh </button>

      <div className="row">
        <div className="col-md">
        {showProduct()}
           </div>
           {
           showForm ?
           <div className='col-md'>
            
            <Updateproduct productFormData={productFormData} />
             
            </div>
          :
          ""

           }
      </div>
       

    </div>
  )
  }

export default  ProductManager ;
