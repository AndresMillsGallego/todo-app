import React from 'react';
import { useState } from 'react';
export const SettingsContext = React.createContext();

function SettingsProvider({children}) {

  const [showCompleted, setShowCompleted] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState(3);
  const [sortString, setSortString] = useState('difficulty');

  const state = {
    showCompleted, 
    itemsToDisplay,
    sortString,
    setShowCompleted,
    setItemsToDisplay,
    setSortString
  }

  return (
    <SettingsContext.Provider value={state}>
      {children}
    </SettingsContext.Provider>
  )
}


export default SettingsProvider;
