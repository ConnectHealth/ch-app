import React, { PropTypes, Component } from 'react';

import { getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../material_ui_raw_theme_file';


class App extends Component {
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(MyRawTheme) };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
