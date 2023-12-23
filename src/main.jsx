import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Provider/AuthProvider'
import MainRoutes from './Routes/MainRoutes';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={MainRoutes}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>,
)
