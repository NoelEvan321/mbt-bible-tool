import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Navigation() {

  return (
    <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
        <Navbar.Brand href='/'>Bible Tool</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
                <>
                <Link to='/affiliations' className='nav-link'>Affiliations and Doctrine</Link>
                <Link to='/biblesearch' className='nav-link'>Search and Analysis</Link>
                <Link to='/discoverymethod' className='nav-link'>Discovery Bible Method</Link>
                </>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}