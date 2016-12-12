var React = require('react');
var Nav = require('./Nav.jsx');

var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;
