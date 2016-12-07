var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/Actions.jsx');
var PokemonStore = require('../reflux/PokemonStore.jsx');

var DetailsPage = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return {pokemon: {}, pid: ""};
  },
  componentWillMount: function() {
    this.setState({pid: this.props.params.pokemonId});
    var id = this.props.params.pokemonId;
    // console.log(id);
    var link = "/pokemon-species/" + id;
    Actions.getPokemon(link);
  },
  onChange: function(event, pokemon) {
    this.setState({pokemon: pokemon});
  },
  render: function() {
    // console.log(this.state.pid);
    return (
      <div>

      </div>
    );
  }
});

module.exports = DetailsPage;
