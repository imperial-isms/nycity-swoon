import React from 'react';
import './App.css';
import AdminContainer from './routes/admin'

function App() {
  return (
    <div className="App" style={{display: 'flex', minHeight: '100vh'}}>
      <AdminContainer/>
    </div>
  );
}

export default App;
