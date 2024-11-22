import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  const handleLogout = () => {
    Auth.logout();
    window.location.assign('/login');
  };

  return (
    <nav>
      <ul>
        {Auth.loggedIn() ? (
          <>
            <li>
              <Link to="/board">Board</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;