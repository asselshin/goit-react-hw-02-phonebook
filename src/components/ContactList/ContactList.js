import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contactArray, onDeleteClick }) => {
  return (
    <ul>
      {contactArray.map(({ id, name, number }) => {
        return (
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArray: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactList;
