import React, { useContext, useState, useEffect } from 'react';
import { SettingsContext } from '../../context/settings';

const List = ({ list, toggleComplete }) => {

  const settings = useContext(SettingsContext);

  function displayList() {
    let listItems = [];
    for (let i = start; i < end; i++) {
      listItems.push(list[i])
    }
    setResults([listItems])
    console.log(results)
  }
  
  function forward(e) {
    
  } 

  

  return (
    <>
      
      {list.map(item => (

        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
          <button type='click' onClick={displayList}>Next</button>
        </div>

      ))
      }
    </>
  )
}

export default List;
