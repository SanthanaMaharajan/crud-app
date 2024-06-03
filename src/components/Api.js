import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios';

function ApiTest() {
    const [data,setData]=useState([])
    const [title,setTitle]=useState("")

    useEffect(()=>{

        axios.get(`https://api.sampleapis.com/cartoons/cartoons2D`)
        .then((res)=>{
            setData(res.data);
        })
    },[])

    const patchData=()=>{
        axios.patch(`https://api.sampleapis.com/cartoons/cartoons2D/${1}`,{title,title})
        .then((res)=>{
            setData(res.data)
        })
    }
    return ( 
        <>
            <h3>API Fetching</h3>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={patchData}>Patch Data</button>
                       <div className='row d-flex flex-wrap gap-5'>
            {
                data && data.map((list)=>{
                    return(
                        

                        <Card style={{ width: '30%' }}>
                            <Card.Img variant="top" src={list.image} />
                            <Card.Body>
                                <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{list.rating}</ListGroup.Item>
                                <ListGroup.Item>{list.creator}</ListGroup.Item>
                                <ListGroup.Item>{list.year}</ListGroup.Item>
                                <ListGroup.Item>{list.genre}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                       </Card>
                        
                    )
                })
            }
            </div>
        </>
     );
}

export default ApiTest;