import React, { useContext, useState, useEffect } from 'react';
import { render } from 'react-dom/cjs/react-dom.production.min';
import { SettingsContext } from '../../context/settings';

const List = ({ list, toggleComplete }) => {

  const settings = useContext(SettingsContext);

  const [page, setPage] = useState(1);
  
  
  useEffect(() => {
    renderResults()
  }, [list])

  return (
    <>
      {list.map(item => (

        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
          {/* <button type='click' onClick={displayList}>Next</button> */}
        </div>

      ))
      }
    </>
  )
}

export default List;
