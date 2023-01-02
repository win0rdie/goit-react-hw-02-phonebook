import { Component } from 'react';
import { Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = nanoid();

  render() {
    const { name, number } = this.state;

    return (
      <Formik>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              id={this.nameInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="">
            Number
            <input
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <button type="submit">Add contact</button>
        </form>
      </Formik>
    );
  }
}

export default ContactForm;
