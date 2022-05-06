import React from 'react'
import { Label, Switch, Button } from '@blueprintjs/core';
import { SettingsContext } from '../../context/settings'
import { useContext, useState } from 'react';

import Header from '../header/header'
import Footer from '../footer/Footer'

const Settings = () => {

  const settings = useContext(SettingsContext);

  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState(settings.itemsToDisplay);
  const [sort, setSort] = useState(settings.sortString);



  const handleItems = (e) => {
    setItems(e.target.value);
    console.log(items)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
    console.log(sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(settings.itemsToDisplay)
    settings.setShowCompleted(checked);
    settings.setItemsToDisplay(items);
    settings.setSortString(sort);

  }

  return (
    <>
    <Header /> 
      <form onSubmit={handleSubmit} id='settings-form'>
        <h2>Settings</h2>
        <Label>
          Show Completed
          <Switch checked={checked} onChange={() => setChecked(!checked)} />
        </Label>
        Items To Display
        <input type='number' onChange={handleItems} />
        <Label>
          Sort String
          <input type='text' onChange={handleSort} />
        </Label>

        <Button type='submit'>Submit Changes</Button>
      </form>
      <Footer />
    </>
  )
}

export default Settings;
