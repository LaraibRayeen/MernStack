import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [todolist, setTodoList] = useState([])

      const addnewtask =() =>{
        if(task){
        setTodoList([...todolist,task])
        setTask("");
        }
  } 

  const removeTask=(index)=> {
    let temp =todolist;
    temp.splice(index,1);
    setTodoList([...temp]);
}


     const showTodoList =()=> {
        return todolist.map((task,index) => <div className='d-flex justify-content-between task-body '>
            <p> {task}</p> 
            <button className='btn btn-danger'  onClick={()=> {removeTask(index)}}> <i class="fa fa-trash      q " 
         aria-hidden="true"></i></button>
            </div> )

     }

     const [task, setTask] = useState("")



  return (
    <div className='container'>

        <div className='card'>
            <div className='card-body'>

            <h3> todo list   </h3>
            <hr />
            
             <div className='input-group'>
                <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} className='form-control'/>
                <button onClick={addnewtask} className='btn btn-primary'>add to task</button> </div>
                
               <div> {showTodoList()}  </div>
               </div>
            </div>


        </div>


  )
}

export default Todo;