import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import { addContact } from 'redux/contacts/operations';
import { getContact } from 'redux/contacts/selectors';
import css from './ContactForm.module.css';

function ContactForm() {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  function saveContactHandler(evt) {
    evt.preventDefault();
    const contactName = contactNameRef.current.value;
    const contactNumber = contactNumberRef.current.value;

    const name = contacts.items.filter(contact => contact.name === contactName);
    const number = contacts.items.filter(
      contact => contact.number === contactNumber
    );

    if (name.length > 0) {
      alert(`${contactName} is already in contacts.`);
      return;
    } else if (number.length > 0) {
      alert(`${contactNumber} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: contactName, number: contactNumber }));
    const form = evt.target;
    form.reset();
  }

  return (
    <form className={css.form} type="submit" onSubmit={saveContactHandler}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          ref={contactNameRef}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          ref={contactNumberRef}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
