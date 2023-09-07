import Sidebar from '../Sidbar';
import './index.scss';
import Home from '../Home';

const Layout = () => {
    return (
    <div className='App'>
     <Sidebar />
     <Home />
    </div>
    );
}
export default Layout;