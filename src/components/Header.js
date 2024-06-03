import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';


function Header() {
    const {tasklist}=useSelector((state)=>state.tasks)
    return ( 

        <div className='text-center'>
                <Navbar bg="dark" data-bs-theme="dark" className='py-3'>
                    <Container>
                        <Navbar.Brand >Task Management</Navbar.Brand>
                        <Nav className='d-flex align-items-center gap-5 text-light'>
                        <Nav.Link  className='text-light'>Home</Nav.Link>
                        <Nav.Link  className='text-light'>About</Nav.Link>
                        <Nav.Link  className='text-light'>Dashboard</Nav.Link>
                        <Nav.Link  className='text-light'>Contact</Nav.Link>
                        <Nav.Link className='text-light'>Tasks<Badge bg="danger" className='align-top'>{tasklist.length}</Badge></Nav.Link>
                        
                        </Nav>
                    </Container>
                </Navbar>
            {/* <h2 className='text-secondary'>Task Management</h2>
            <p>{`No of Available Task ${tasklist.length}`}</p> */}
        </div>
     );
}


export default Header;