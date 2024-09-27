import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Root} from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import {worker} from "./mocks/browser";
import {Listing} from "./components/views/listing";
import {SingleVideo} from "./components/singleVideo/singleVideo";

console.log('ttt process.env.NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    // server.listen()
    // worker.start({ onUnhandledRequest: 'bypass' });
}

export const responsePlease = async () => {
    const response = await fetch('http://localhost:4000/clips')
    const user = await response.json()
    console.log('ttt user', user)
    return user
}

export const fetchClipById = async (id) => {
    console.log('ttt id', id)
    const response = await fetch(`http://localhost:4000/clips?id=${id}`);
    const data = await response.json();
    console.log('ttt data', data)
    return  data;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        // loader: rootLoader,
        children: [
            {
                path: '/',
                element: <Listing />
            },
            {
              path: "video/:videoId",
              element: <SingleVideo />
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);