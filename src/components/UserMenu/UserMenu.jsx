import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css'

function UserMenu() {
    const {user: { name }} = useAuth();
    const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
    return <div className={css.user_menu}>
        <div className={css.user_information}>
              <Avatar sx={{ width: 29, height: 29, borderRadius: '50%' }} />
              <p>{name}</p>
            </div>
            <NavLink onClick={handleLogout} to="/" className={css.log_out}>
              Log out
            </NavLink>
    </div>
}
export default UserMenu