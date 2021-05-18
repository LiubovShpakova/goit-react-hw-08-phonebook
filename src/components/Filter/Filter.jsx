import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selectors';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styled from 'styled-components';
const Styles = styled.div`
  .form-control {
    max-width: 400px;
  }
`;
const Filter = ({ value, onChange }) => (
  <Styles>
    <h2>Contacts</h2>
    <Form>
      <Form.Group>
        <Form.Label>Find Contacts By Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact name or number"
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  </Styles>
);

Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
