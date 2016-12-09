var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Pokemon = React.createClass({

  render: function() {
    styles = {
      listStyle: "none"
    };

    return(
      <div className="col-sm-4" style={styles}>
        <Link to={this.props.link}>
          <li><img src={this.props.image} /></li>
          <li>{this.props.pid}</li>
        <li>{this.props.pokemon}</li>
        <br />
      </Link>
    </div>
    );
  }
});

module.exports = Pokemon;
