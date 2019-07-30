import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName } from '../actions/nameChanger';
import { log } from 'util';

class HelloWorld extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {name} = this.state;
    return (
    <div>
      <h3>
        Greetings, {name}!
      </h3>
      <hr />
      <form >
        <label htmlFor="name">
          Say hello to:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={this.onChange}
        />
      </form>
    </div>
    );
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps, { updateName })(HelloWorld);
