import css from './Home.module.css';

function Home() {
  return (
    <>
      <p className={css.home}>Welcome to Phonebook!</p>
      <p className={css.create_text}>
        Create your own personal book of contacts
      </p>
    </>
  );
}
export default Home;
