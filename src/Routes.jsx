var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var BasePage = require('./components/BasePage.jsx');
var MainPage = require('./components/MainPage.jsx');
var DetailsPage = require('./components/DetailsPage.jsx');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={BasePage} >
      <IndexRoute component={MainPage} />
      <Route path="/pokemon/:pokemonId" component={DetailsPage} />
    </Route>
  </Router>
);

module.exports = Routes;
