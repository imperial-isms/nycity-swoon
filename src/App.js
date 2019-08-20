import React from 'react';
import './App.css';
// import AdminContainer from './routes/admin'
import ClientContainer from './routes/client'

function App() {
  return (
    <div className="App" style={{display: 'flex', minHeight: '100vh'}}>
      {/* <AdminContainer/> */}
      <ClientContainer/>
    </div>
  );
}

export default App;
