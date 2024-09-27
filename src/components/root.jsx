import { Link, Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';

export const Root = () => {
    // const response = await fetch('http://localhost:3000/api/clips')
    // const user = await response.json()
    // console.log(user)

    return (
        <>
            <Header />
            <div id="content-wrapper">
                <Sidebar />
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
