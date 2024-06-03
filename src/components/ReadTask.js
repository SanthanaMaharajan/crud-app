import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaEdit, FaTrash } from "react-icons/fa";
import MyVerticallyCenteredModal from './UpdateTask';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSelectedTask } from '../slice/taskSlice';
import { removeFromList } from '../slice/taskSlice';


function ReadTask() {
    const {tasklist}=useSelector((state)=>state.tasks)
    const updateTask=(task)=>{
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }
    const deleteTask=(task)=>{
        dispatch(removeFromList(task))
    }
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch=useDispatch()

    return ( 
        <>
            
            <Table striped bordered hover className='mt-5'>
            <thead className='text-center'>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody className='text-center'>

                {
                    tasklist && tasklist.map((task,index)=>{
                        return (
                            <tr key={task.id}>
                                <td>{index+1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>
                                <Button variant="secondary" onClick={()=>updateTask(task)}> <FaEdit /> Edit</Button>   <Button variant="danger" onClick={()=>deleteTask(task)}> <FaTrash/>  Delete</Button>
                                </td>
                            </tr>
                        );
                    })
                }
                
            </tbody>
            </Table>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
     );
}

export default ReadTask;