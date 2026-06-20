import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TodoApp } from './pages/TodoApp/TodoApp.tsx';
import { Home } from './pages/home/Home.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/offer', element: <p>Oferta</p> }
		]
	},
	{ path: '/auth', element: <TodoApp /> }
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
