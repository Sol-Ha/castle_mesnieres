import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext';

// ReactDOM.render(
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
  // document.getElementById('root')
);
