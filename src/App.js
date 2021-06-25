import React from 'react';
import { MainMovies } from './components/MainMovies'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
          <Route exact path="*">
            <MainMovies/>
          </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
