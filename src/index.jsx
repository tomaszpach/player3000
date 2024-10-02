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
import { Listing } from './components/listing/listing';
import { SingleVideo } from './components/singleVideo/singleVideo';
import { createRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Header } from './components/header/header';

const routes = [
    { path: '/', name: 'Home', element: <Listing />, nodeRef: createRef() },
    {
        path: 'video/:videoId',
        name: 'Video',
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

    const nodeRef = React.useRef(null);

    return (
        <>
            <Header />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    nodeRef={nodeRef}
                >
                    {() => (
                        <div ref={nodeRef} className="page section">
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
