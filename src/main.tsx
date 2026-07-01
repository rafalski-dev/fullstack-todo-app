import { createRoot } from 'react-dom/client';
import './globals.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TodoAppPage } from './pages/TodoAppPage/TodoAppPage.tsx';
import { SessionProvider } from './context/SessionContext.tsx';
import { PublicRoute } from './components/PublicRoute/PublicRoute.tsx';
import { AuthPage } from './pages/AuthPage/AuthPage.tsx';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute.tsx';
import { Auth } from './components/Auth/Auth.tsx';
import { Register } from './components/Register/Register.tsx';
import { Home } from './pages/Home/Home.tsx';
import { RegisterSuccess } from './components/RegisterSuccess/RegisterSuccess.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '/auth',
				element: (
					<PublicRoute>
						<AuthPage />
					</PublicRoute>
				),
				children: [
					{
						index: true,
						element: <Auth />
					},
					{
						path: 'register',
						element: <Register />
					},
					{
						path: 'register-success',
						element: <RegisterSuccess />
					}
				]
			},

			{
				path: '/app',
				element: (
					<RestrictedRoute>
						<TodoAppPage />
					</RestrictedRoute>
				)
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<SessionProvider>
		<RouterProvider router={router} />{' '}
	</SessionProvider>
);
