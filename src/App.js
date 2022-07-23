import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Main } from './mainPage/main';
import {QalynMalquiz} from './qalynmal/qalynmalquiz';
import { QalynmalAnswer } from './qalynmal/qalynmalAnswer/qalynmalAnswer';
import { SumContext } from './Context';
import { useState } from 'react';

function App() {
  const [sum, setSum] = useState(0);

  return (
    <BrowserRouter>
    <SumContext.Provider value={{sum, setSum}}>
        <Routes>

        <Route
            path="/"
            element={<Main/>}
          />

          <Route
            path="/quizPage"
            element={<QalynMalquiz/>}
          />

          <Route
            path="/answerPage"
            element={<QalynmalAnswer/>}
          />

        </Routes>
        </SumContext.Provider>
    </BrowserRouter>
  );
}

export default App;
