import React from 'react';
import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard firstName="Jane " lastName="Doe, " age={45} haircolor="Black" />
     <PersonCard firstName="Jhon" lastName="Smith, " age={88} haircolor="Brown" />
     <PersonCard firstName="Millard " lastName="Filmore, " age={50} haircolor="Brown" />
     <PersonCard firstName="Maria " lastName="Smith, " age={62} haircolor="Brown" />
      </div>
        
  );
}

export default App;
