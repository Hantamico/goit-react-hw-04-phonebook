import React, {Component} from "react";
import css from './form.module.css'

export class Form extends Component{
    state = {
        name: '',
        number: '',
    }

     handleChange = evt => {
        this.setState({[evt.currentTarget.name]: evt.currentTarget.value})
     }
    
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({name: '', number: '',})
    }
    
    render(){
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
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
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button className={css.btn__submit}>Add Contact</button>
            </form>
        )
    }
}