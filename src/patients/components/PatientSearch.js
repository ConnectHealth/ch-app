import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

const defaultStyle = {
  marginLeft: 20,
};

class PatientSearch extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEnter(e) {
    if (e.keyCode === 13) { // on enter
      const text = e.target.value.trim();
      this.props.onSearch(text);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <TextField
        style={defaultStyle}
        type="text"
        hintText={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

PatientSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PatientSearch;
