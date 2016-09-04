// @flow
import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import theme from '../theme';

/* import { actions } from './actions';*/

import '../main.css';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const App = (props) => {
  const { prepareStyles } = theme;
  return (
    <MuiThemeProvider muiTheme={theme}>
      <div>
        <AppBar title={'props.title fixme'} />
        <div style={prepareStyles(style.container)}>
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  /* title: PropTypes.string.isRequired,*/
};

/* function mapStateToProps(state) {
 *   return { title: state.app.title };
 * }*/

/* function mapDispatchToProps(dispatch) {
 *   return { actions: bindActionCreators(actions.updateTitle, dispatch) };
 * }
 * */
/* export default connect(
 *   mapStateToProps,
 *   mapDispatchToProps
 * )(App);*/

export default App;
