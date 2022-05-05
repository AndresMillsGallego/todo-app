import React from 'react'
import { FormGroup, Label, Switch, Button } from '@blueprintjs/core';
import { SettingsContext } from '../../context/settings'
import { useContext, useState } from 'react';

const Settings = () => {

  const settings = useContext(SettingsContext);
  


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <FormGroup>
      <h2>Settings</h2>
      <Label>
        Show Completed
        <Switch checked={settings.showCompleted} onChange={() => settings.setShowCompleted(!settings.showCompleted)}/>
      </Label>
        Items To Display
        <input type='number' />
      <Label>
        Sort STring
        <input type='text'/>
      </Label>

      <Button type='submit'>Submit Changes</Button>
    </FormGroup>
  )
}

export default Settings;
