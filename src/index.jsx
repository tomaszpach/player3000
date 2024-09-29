import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    useLocation,
    useOutlet,
} from 'react-router-dom';
import './index.scss';
import ErrorPage from './error-page';
import { Listing } from './components/views/listing';
import { SingleVideo } from './components/singleVideo/singleVideo';
import { createRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

const routes = [
    { path: '/', name: 'Home', element: <Listing />, nodeRef: createRef() },
    {
        path: 'video/:videoId',
        name: 'About',
        element: <SingleVideo />,
        nodeRef: createRef(),
    },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Transition />,
        errorElement: <ErrorPage />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
]);

function Transition() {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const { nodeRef } =
        routes.find((route) => route.path === location.pathname) ?? {};
    return (
        <>
            <Header />
            <Sidebar />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {(state) => (
                        <div ref={nodeRef} className="page">
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
