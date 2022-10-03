import React from 'react';
import Header from '../Header/Header';
import Rampeng from '../Rampeng/Rampeng';
import Footer from '../Footer/Footer'

import './App.css';

function App() {
  
  return (
   <React.Fragment>
      <Header />
      <main>
        <Rampeng />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;