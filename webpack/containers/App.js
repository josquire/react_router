import React from 'react';
import Navbar from '../components/Navbar';


const App = ({ children }) => (
  <div>
    <Navbar />
    <div className='center container'>
      { children }
    </div>
  </div>
)

export default App;
