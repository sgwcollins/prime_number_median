import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import PrimeContainer from './container/PrimeContainer';
import { BASE_URL } from './constants/endpoints';


function App() {

  console.log(BASE_URL)
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <PrimeContainer />
    </div>
  );
}

export default App;
