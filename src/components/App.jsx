import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useAuth } from 'hooks/index';
import { refreshUser } from 'redux/auth/operations';
import ProtectedRoute from 'routes/ProtectedRoute';
import Home from 'pages/Home/Home';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import LoginPage from 'pages/login/LoginPage';
import RegisterPage from 'pages/register/registerPage';
import NotFound from 'pages/notFound/NotFound';
import css from './App.module.css';

export const App = () => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const dispatch = useDispatch();
  const callOnceDispatch = useRef(true)

  useEffect(() => {
    if (callOnceDispatch.current) {
      callOnceDispatch.current = false
    dispatch(refreshUser());
    }
  }, [dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    } 
  }, [isLoggedIn, navigate]);

  return (
    <>
      {!isRefreshing  && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/contacts"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <div className={css.section}>
                      <div className={css.form}>
                        <h1 className={css.title}>Phonebook</h1>
                        <ContactForm />
                      </div>
                      <div className={css.form}>
                        <h2 className={css.subtitle}>Contacts</h2>
                        <Filter />
                        <ContactList />
                      </div>
                    </div>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

//Jake Jakson Jakson1234@test.com demo1234
//Jake Jakson Jakson12341234@test.com demo12341234
//Oleh Linskyi  Linskyi@gmail.com demo1234