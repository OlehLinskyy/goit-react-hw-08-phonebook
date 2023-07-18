import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { register } from 'redux/auth/operations';
import css from './registred.module.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isAuthError } = useAuth();

  const handleRegister = () => {
    dispatch(register({ email, password, name }));
  };
  const handleLoginNavigate = () => {
    navigate('/login');
  };

  return (
    <div className={css.register_page}>
      <p className={css.register}>Register</p>
      <input
        className={css.input}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={event => setName(event.target.value)}
      />{' '}
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
        <p className={css.error}>Error occurred while register in</p>
      )}
      <button className={css.button} onClick={handleRegister}>
        Register
      </button>
      <button className={css.button} onClick={handleLoginNavigate}>
        Go to login!
      </button>
    </div>
  );
}
export default RegisterPage;
