import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import { colors } from 'material-ui/styles';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const PatientItem = (props) => {
  const { patient } = props;

  // const deleteFn = () => deleteTodo(todoId);
  const nothing = () => {};
  const iconButtonElement = (
    <IconButton>
      <MoreVertIcon color={colors.grey400} />
    </IconButton>
  );
  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem primaryText="Edit" onTouchTap={nothing()} />
      <MenuItem primaryText="Delete" onTouchTap={nothing()} />
    </IconMenu>
  );

    // const onTouchTap = () => complete(todoId);
  // TODO - this will link

  const text = `${patient.firstName} ${patient.lastName}`;

  return (
    <ListItem
      primaryText={text}
      rightIconButton={rightIconMenu}
    />
          // onTouchTap={onTouchTap}
          // onClick={onTouchTap}
    );
};

PatientItem.propTypes = {
  patient: PropTypes.object.isRequired,
  // patientId: PropTypes.number.isRequired,
};

export default PatientItem;
