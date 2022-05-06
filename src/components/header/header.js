import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'

function Header({ incomplete }) {

  const [header, toggleHeader] = useState(true)

  return (
    <>
      <header>
        <h1>{header ? 'Home' : 'Settings'}</h1>

        <Navbar id='navBar' className='bp4-dark bp4-align-center'>
          <NavbarGroup align='center'>
            <Link to='/'>Home</Link>
              <NavbarDivider/>
                <NavbarHeading id='nav-heading'>Links</NavbarHeading>
              <NavbarDivider/>
            <Link to='/settings' onClick={() => toggleHeader(false)}>Settings</Link>
          </NavbarGroup>
        </Navbar>

      </header>
      <header id='item-counter'>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
    </>
  )
}

export default Header;