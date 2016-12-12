var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Pokemon = React.createClass({

  render: function() {
    styles = {
      listStyle: "none",
      fontSize: 20,
      color: "#000"
    };

    thumbnailStyle = {
      height: 200,
      backgroundColor: "#fff",
      textAlign: "center"
    };

    name = {
      marginTop: 20
    };
    return(
      <div className="col-sm-3" style={styles}>
        <div style={thumbnailStyle} className="thumbnail">
          <Link to={this.props.link}>
            <li><img src={this.props.image} /></li>
            <br />
            <li>{this.props.pid} - {this.props.pokemon}</li>
            <br />
          </Link>
        </div>
    </div>
    );
  }
});

module.exports = Pokemon;
