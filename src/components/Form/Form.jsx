import {useState} from "react";
import css from './form.module.css'
import PropTypes from 'prop-types';

export default function Form({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    function handleChange(e) {
        switch (e.currentTarget.name) {
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'number':
                setNumber(e.currentTarget.value);
                break;
            default:
                return;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    }
    
    return (
            <form className={css.form} onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        className={css.form__input}
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        value={number}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className={css.btn__submit}>Add Contact</button>
            </form>
        )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
}
