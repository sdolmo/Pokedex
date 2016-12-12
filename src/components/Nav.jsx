var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Nav = React.createClass({
  render: function() {

    var styles = {
      backgroundColor: "#fff",
      paddingBottom: 20,
      position: "relative"
    }

    return (
      <div style={styles}>
        <div className="logo"><Link to="/"><img src="image/pokemon-logo.png" /></Link></div>
      </div>
    );
  }
});

module.exports = Nav;
