var App = require('./components/App');
var AppHomeRoute = require('./routes/AppHomeRoute');

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppHomeRoute()}
  />,
  document.getElementById('root')
);
