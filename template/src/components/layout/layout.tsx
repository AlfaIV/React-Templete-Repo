import { Outlet, Link } from 'react-router-dom';
import { baseUrl, baseUrlTitle, footerTitle, test2Url, test2UrlTitle } from '../../constants/constants';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={baseUrl}>{baseUrlTitle}</Link>
          <Link to={test2Url}>{test2UrlTitle}</Link>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>
        <p>{footerTitle}</p>
      </footer>
    </div>
  );
};

export default Layout;