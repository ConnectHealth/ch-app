import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import { ListItem, IconButton, Styles } from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import CheckBoxIcon from 'material-ui/lib/svg-icons/toggle/check-box';
import CheckBoxBlankIcon from 'material-ui/lib/svg-icons/toggle/check-box-outline-blank';

import todosfixme from '..';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleEdit () {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.edit(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo, complete, deleteTodo} = this.props;

    const rightIconMenu = (
      <IconMenu iconButtonElement={
          <IconButton>
            <MoreVertIcon color={Styles.Colors.grey400} />
          </IconButton>
        }
      >
        <MenuItem primaryText="Edit" onTouchTap={this.handleEdit.bind(this)}/>
        <MenuItem primaryText="Delete" onTouchTap={() => deleteTodo(todo.id)}/>
      </IconMenu>
    );

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                      editing={this.state.editing}
                      onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <ListItem primaryText={todo.text}
                  onTouchTap={() => todosfixme.actions.complete(todo.id)}
                  leftIcon={todo.completed ? <CheckBoxIcon /> : <CheckBoxBlankIcon />}
                  rightIconButton={rightIconMenu}
        />
      );
    }

    return (
      <div className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}>
        {element}
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  edit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired
};

export default TodoItem;
