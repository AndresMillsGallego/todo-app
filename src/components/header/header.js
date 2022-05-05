import React from 'react'

function Header({ incomplete }) {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <header id='item-counter'>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
    </>
  )
}

export default Header;