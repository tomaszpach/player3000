import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import { Root } from './components/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import { Listing } from './components/views/listing';
import { SingleVideo } from './components/singleVideo/singleVideo';

if (process.env.NODE_ENV === 'development') {
    // server.listen()
    // worker.start({ onUnhandledRequest: 'bypass' });
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        // loader: rootLoader,
        children: [
            {
                path: '/',
                element: <Listing />,
            },
            {
                path: 'video/:videoId',
                element: <SingleVideo />,
            },
            {
                path: 'contacts/:contactId',
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
