var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Pokemon = React.createClass({
  render: function() {
    return(
      <li><Link to={this.props.link}>{this.props.pokemon}</Link></li>
    );
  }
});

module.exports = Pokemon;
