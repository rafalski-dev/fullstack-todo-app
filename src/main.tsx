import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthPanel } from './pages/Auth/AuthPanel.tsx';
import { Home } from './pages/home/Home.tsx';

const router = createBrowserRouter([
	{ path: '/', element: <App />, children: [{ index: true, element: <Home /> }] },
	{ path: '/auth', element: <AuthPanel /> }
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
