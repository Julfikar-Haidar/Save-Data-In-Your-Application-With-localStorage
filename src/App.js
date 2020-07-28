import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FormDataComponent from './components/form-data.component';
import LocalSave from './components/LocalSave';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormDataComponent />
        <LocalSave/>
      </div>
    );
  }
}

export default App;