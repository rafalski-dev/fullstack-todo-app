import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Auth } from './pages/Auth/Auth.tsx';
import { Home } from './pages/home/Home.tsx';

const router = createBrowserRouter([
	{ path: '/', element: <App />, children: [{ index: true, element: <Home /> }] },
	{ path: '/auth', element: <Auth /> }
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
