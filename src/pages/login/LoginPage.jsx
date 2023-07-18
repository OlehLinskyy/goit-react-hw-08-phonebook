import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { login } from 'redux/auth/operations';
import css from './LoginPage.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isAuthError } = useAuth();

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };
  const handleRegisterNavigate = () => {
    navigate('/register');
  };

  return (
    <div className={css.login_page}>
      <p className={css.login}>Login</p>
      <input
        className={css.input}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />{' '}
      <input
        className={css.input}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />{' '}
      {isAuthError && (
        <p className={css.error}>Error occurred while logging in</p>
      )}
      <button className={css.button} onClick={handleLogin}>
        Login
      </button>
      <button className={css.button} onClick={handleRegisterNavigate}>
        Go to register
      </button>
    </div>
  );
}
export default LoginPage;
