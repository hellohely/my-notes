import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Login } from "./components/login";
import CreateDocument from './components/createDocument';
import { Documents } from './components/documents';
import { Document } from './components/document';
import { EditDocument } from './components/editDocument';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/editor" element={<CreateDocument />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/documents/:id" element={<Document/>} />
      <Route path="/edit" element={<EditDocument/>} />
      
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
