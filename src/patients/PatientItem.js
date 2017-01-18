// @flow
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import { colors } from 'material-ui/styles';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import type { Patient } from './store';

const PatientItem = ({ patient } : { patient: Patient}) => {
  const iconButtonElement = (
    <IconButton>
      <MoreVertIcon color={colors.grey400} />
    </IconButton>
  );
  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem primaryText="Edit" />
      <MenuItem primaryText="Delete" />
    </IconMenu>
  );

  const text = `${patient.firstName} ${patient.lastName}`;

  return (
    <ListItem
      primaryText={text}
      rightIconButton={rightIconMenu}
    />
  );
};

export default PatientItem;
