import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import MainSection from '../layout/MainSection';
// import * as TodoActions from '../todos/actions';
import todosfixme from '../todos';
console.log(todosfixme.actions)
console.log('ddddddddddddddddddddd')

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header add={todosfixme.actions.add} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}


App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todosfixme.actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
