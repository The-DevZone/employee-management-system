// src/main.jsx or index.jsx (based on your setup)

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthContext from './context/AuthContext';
import TaskContext from './context/TaskContext';
localStorage.clear();
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </React.StrictMode>
);