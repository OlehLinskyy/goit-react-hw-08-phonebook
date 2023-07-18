import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleContactDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.list}>
      <div className={css.contact_value}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={handleContactDelete}
      >
        Delete
      </button>
    </li>
  );
}
export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape().isRequired,
};
