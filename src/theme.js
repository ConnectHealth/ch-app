// @flow
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import { red500, red700 } from 'material-ui/styles/colors';

const overrides = {
  palette: {
    primary1Color: red500,
    primary2Color: red700,
  },
};

export default getMuiTheme(lightBaseTheme, overrides);
