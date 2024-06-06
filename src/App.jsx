import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ color:'white',align:'center', paddingBottom:'300px',paddingLeft:'600px'}}>
      <h1>Task:01</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{ color:'black',backgroundColor:'pink',align:"center" ,padding: '10px', fontSize: '20px',fontWeight:'bold' }}
      />
      <p style={{ marginTop: '20px',marginLeft:'10px', fontSize: '20px',fontWeight:"bold" }}>{inputValue}</p>
    </div>
  );
}

export default App;
