[![Build Status](https://travis-ci.org/ConnectHealth/ch-app.svg?branch=master)](https://travis-ci.org/ConnectHealth/ch-app)

# WIP

* [React](https://facebook.github.io/react/)
* [Mobx](https://mobxjs.github.io/mobx/)
* [Material UI](http://material-ui.com/#/)
* [webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [ESLint](http://eslint.org/)



# Usage

## Package installation
```bash
$ yarn install
```

## Use development server
For development server, webpack-dev-server is reasonable. It monitors update files and rebuild them automatically. Since webpack cli command is registerd in `package.json` in this project, just type following command to run webpack-dev-server.

```bash
$ yarn start
```

Be careful! the webpack-dev-server rebuild files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section(Build assets), if you want need the bundled files.

## Standards
Testing

    $ yarn test
    # or
    $ yarn run test:watch

Check styles before making a PR

    $ yarn run lint

Auto formatting

    $ yarn run format
    
Ready for PR - runs tests and linting

    $ yarn run check


## Build assets
To put compiled files into `static` directory, type the following command.

```bash
$ yarn run build
```

