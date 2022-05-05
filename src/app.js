import React from 'react';

import ToDo from './components/todo/todo.js';
import Settings from './components/settings/Settings'

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
        <Settings />
      </>
    );
  }
}