import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';

export const Root = () => {
    return (
        <>
            <Header />
            <div id="content-wrapper">
                <Sidebar />
                <div id="detail" className="section">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
