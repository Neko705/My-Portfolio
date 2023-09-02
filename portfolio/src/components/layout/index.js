import Sidebar from '../Sidbar';
import './index.scss';
import Home from '../Home';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='App'>
    <Sidebar />
    <Outlet />
    <Home />
    </div>
    );
}
export default Layout;