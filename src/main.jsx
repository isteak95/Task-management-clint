import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './AuthProvider/AuthProvider';
import TaskManagement from './Pages/TaskManagement/TaskManagement'; // Make sure to import your Todo component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <RouterProvider router={router}>
          <TaskManagement />
        </RouterProvider>
      </AuthProvider>
      <ToastContainer />
    </DndProvider>
  </React.StrictMode>
);
