import React from 'react';
require('dotenv').config();

function App() {
  return (
    <div>
    </div>
  );
}

// debug environment variables
let romeKey = process.env.REACT_APP_ROME_SECRET_KEY;
let googleKey = process.env.REACT_APP_GOOGLE_SECRET_KEY;
console.log("rome 2 rio key = " + romeKey);
console.log("google key = " + googleKey);

export default App;
