import React from 'react'
import { Formik } from 'formik';
import Swal from 'sweetalert2'

export const UpdateUser = ({userFormData}) => {
  
    const registerSubmit = async  (formdata) => {
      
        console.log(formdata)
        // url
        // request method 
        // data
        // data format
        //  asynchronous function - return promise
        
          const response = await  fetch ('http://localhost:5000/user/update/'+formdata._id,{
          method:'PUT',
          body: JSON.stringify(formdata),
          headers : {
            'Content-Type' : 'application/json'
          }
        })
        console.log(response.status);

        if(response.status === 200){
          console.log('user added');
          Swal.fire({

            icon:'success',
            title: 'nice',
            text:'update successfully'
          })

        }
       console.log('request sent');
     }
   
  return (
   
          <div className="card-body p-md-5">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  update user detail
                </p>

             <Formik initialValues={userFormData} onSubmit={registerSubmit} > 

             {({values, handleSubmit ,handleChange})=>(
                 <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                 <div className="d-flex flex-row align-items-center mb-4">
                   <i className="fas fa-user fa-lg me-3 fa-fw" />
                   <div className=" flex-fill mb-0">
                     <input
                       type="text"
                       id="username"
                       onChange={handleChange}
                       value={values.username}
                       className="form-control"
                     />
                     <label className="form-label" htmlFor="form3Example1c">
                       Your Name
                     </label>
                   </div>
                 </div>
                 <div className="d-flex flex-row align-items-center mb-4">
                   <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                   <div className=" flex-fill mb-0">
                     <input
                       type="email"
                       id="email"
                       onChange={handleChange}
                       value={values.email}
                       className="form-control"
                     />
                     <label className="form-label" htmlFor="form3Example3c">
                       Your Email
                     </label>
                   </div>
                 </div>
                 <div className="d-flex flex-row align-items-center mb-4">
                   <i className="fas fa-lock fa-lg me-3 fa-fw" />
                   <div className=" flex-fill mb-0">
                     <input
                       type="password"
                       id="password"
                       onChange={handleChange}
                       value={values.password}
                       className="form-control"
                     />
                     <label className="form-label" htmlFor="form3Example4c">
                       Password
                     </label>
                   </div>
                 </div>
                 <div className="d-flex flex-row align-items-center mb-4">
                   <i className="fas fa-key fa-lg me-3 fa-fw" />
                   <div className=" flex-fill mb-0">
                     <input
                       type="number"
                       id="age"
                       onChange={handleChange}
                       value={values.age}
                       className="form-control"
                     />
                     <label className="form-label" htmlFor="form3Example4cd">
                       age
                     </label>
                   </div>
                 </div>
                 <div className="form-check d-flex justify-content-center mb-5">
                   <input
                     className="form-check-input me-2"
                     type="checkbox"
                     defaultValue=""
                     id="rpassword"
                   />
                   <label className="form-check-label" htmlFor="form2Example3">
                     I agree all statements in{" "}
                     <a href="#!">Terms of service</a>
                   </label>
                 </div>
                 <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                   <button  type="submit" className="btn btn-primary btn-lg">
                     Register
                   </button>
                 </div>
               </form>

             )}

                
                  </Formik>

              
              </div>
             
           
    
  )
         
  
}
export default UpdateUser;