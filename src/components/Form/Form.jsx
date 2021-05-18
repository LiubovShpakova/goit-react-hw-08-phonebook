import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getAllContacts } from '../../redux/contacts/selectors';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styled from 'styled-components';
const Styles = styled.div`
  .btn-secondary {
    color: #d1abc4;
  }
  .form-control {
    max-width: 400px;
  }
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  createContact = () => {
    const { name, number } = this.state;
    const { onSubmit, items } = this.props;

    const sameName = items.find(
      el => el.name.toLowerCase() === name.toLowerCase(),
    );
    const sameNumber = items.find(el => el.number === number);
    if (sameName || sameNumber) {
      alert(`${name} or ${number} is already in contacts`);

      return;
    } else {
      onSubmit(name, number);
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.createContact();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Styles>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id={this.nameInputId}
              placeholder="Enter contact name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="text"
              id={this.numberInputId}
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="Enter contact number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12  цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </Form.Group>
          <Button variant="secondary" type="submit" className="mb-5">
            Add contact
          </Button>
        </Form>
      </Styles>
    );
  }
}
const mapStateToProps = state => ({
  items: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
