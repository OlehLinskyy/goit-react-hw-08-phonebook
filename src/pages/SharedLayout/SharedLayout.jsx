import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './SharedLayout.module.css';

function SharedLayout() {
  const { isLoggedIn } = useAuth();
  const handleActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? 'white' : '#769656',
    };
  };

  return (
    <div>
      <header className={css.header}>
        {!isLoggedIn ? (
          <NavLink style={handleActiveStyle} to="/" className={css.link}>
            Home
          </NavLink>
        ) : (
          <div className={css.nav}>
            <NavLink style={handleActiveStyle} to="/" className={css.link}>
              Home
            </NavLink>
            <NavLink
              style={handleActiveStyle}
              to="/contacts"
              className={css.link}
            >
              Contacts
            </NavLink>
          </div>
        )}
        {!isLoggedIn ? (
          <div className={css.nav}>
            <NavLink
              style={handleActiveStyle}
              to="/register"
              className={css.link}
            >
              Register
            </NavLink>
            <NavLink style={handleActiveStyle} to="/login" className={css.link}>
              Log In
            </NavLink>
          </div>
        ) : (
          <UserMenu />
        )}
      </header>
      <Outlet />
    </div>
  );
}
export default SharedLayout;
