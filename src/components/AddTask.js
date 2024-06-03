import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import { addTaskToList } from '../slice/taskSlice';
import { useDispatch } from 'react-redux';


function AddTask() {
    const dispatch=useDispatch()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const addTask=(e)=>{
        e.preventDefault()
        console.log(title,description)

        dispatch(addTaskToList({title,description}))
        setTitle('')
        setDescription('')
    }

    return ( 

        <>
            <Form className='mt-5'>
            <div className='text-center'>
                <h4>Add New Task</h4>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Name" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Task description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
            <div className='d-grid'>
                <Button variant="primary" size="lg" onClick={(e)=>addTask(e)}>
                    Add New Task
                </Button>
            </div>
            </Form>
        </>
     );
}

export default AddTask;