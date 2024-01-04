import './styling/main.css';
import GridComponent from './components/Grid.js';
import SearchBar from './components/SearchBar.js';
import Selection from './components/SelectionPanel.js';
import React, { useState, createContext  } from 'react';
import SelectContext from './components/context.js';

function App() {

  const [selectionState, setSelectionState] = useState("init");
  const [source, setSource] = useState(0);
  const [sink, setSink] = useState(0);

  const generateEmptyGrid = (rows, cols) => {
    return Array.from({ length: rows }).map(() =>
      Array.from({ length: cols }).fill(0)
    );
  };

  const [grid, setGrid] = useState(() => generateEmptyGrid(25, 25));

  const value = {
    selectionState, setSelectionState,
    source, setSource,
    sink, setSink,
    grid, setGrid
  };
  return (
    <>
      <SelectContext.Provider value = {value}>
        <div className="App">
          <SearchBar></SearchBar>
            <div className="container">
              <Selection></Selection>
              <GridComponent></GridComponent>
            </div>
        </div>
      </SelectContext.Provider>
    </>
  );
}

export default App;
