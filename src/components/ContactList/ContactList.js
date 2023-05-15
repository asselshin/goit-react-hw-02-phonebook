import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contactArray, onDeleteClick }) => {
  return (
    <ul>
      {contactArray.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          {name}: {number}
          <button
            type="button"
            className={s.deleteBtn}
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
