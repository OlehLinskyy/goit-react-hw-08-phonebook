import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);
  }, [navigate]);

  return (
    <>
      <div className={css.not_found}>Page not found</div>
    </>
  );
}
export default NotFound;
