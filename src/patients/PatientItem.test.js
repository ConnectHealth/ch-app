// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PatientItem from './PatientItem';
import { Patient } from './store';

test('simple html', () => {
  const patient = new Patient(
    'first',
    'last',
  );

  const component = renderer.create(
    <MuiThemeProvider>
      <PatientItem patient={patient} />
    </MuiThemeProvider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('shallow', () => {
  const patient = new Patient(
    'first',
    'last',
  );

  const component = shallow(
    <PatientItem patient={patient} />,
  );

  expect(component.text()).toEqual('<ListItem />');
});

test('dom', () => {
  const patient = new Patient(
    'first',
    'last',
  );

  const component = mount(
    <MuiThemeProvider>
      <PatientItem patient={patient} />
    </MuiThemeProvider>,
  );

  expect(component.text()).toEqual('first last');
});

test('enzyme render', () => {
  const patient = new Patient(
    'first',
    'last',
  );

  const component = render(
    <MuiThemeProvider>
      <PatientItem patient={patient} />
    </MuiThemeProvider>,
  );

  expect(component.text()).toEqual('first last');
});
