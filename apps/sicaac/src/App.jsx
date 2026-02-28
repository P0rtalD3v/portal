import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SicaacLayout from './pages/SicaacLayout';
import SicaacHome from './pages/SicaacHome';
import EmConstrucao from './pages/EmConstrucao';

function App() {
  return (
    <BrowserRouter basename="/sicaac">
      <Routes>
        <Route path="/" element={<SicaacLayout />}>
          <Route index element={<SicaacHome />} />
          <Route path=":categoria/:pagina" element={<EmConstrucao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;