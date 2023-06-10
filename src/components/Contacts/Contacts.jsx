import PropTypes from 'prop-types'
import css from './contacts.module.css'

export default function Contacts({ contacts, handleDelete }) {
    return (
        <ul>
          {contacts.map(({id,name,number}) => 
              <li className={css.contacts__item} key={id}>
                  {name}: {number}
                  <button className={css.delete__btn} onClick={() => handleDelete(id)}>Delete</button>
              </li>
          )}
        </ul>
    )
        
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
    handleDelete: PropTypes.func,
};