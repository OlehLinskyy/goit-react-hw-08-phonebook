import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/Filter/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </label>
    </>
  );
}
export default Filter;
