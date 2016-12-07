var React = require('react');
var Pokemon = require('./Pokemon.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/Actions.jsx');
var PokemonStore = require('../reflux/PokemonStore.jsx');


// capture results from API to iterate through the json and render the pokemon
var MainPage = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return {pokemons: []};
  },
  componentWillMount: function() {
    Actions.getPokemons();
  },
  onChange: function(event, pokemons) {
    this.setState({pokemons: pokemons});
  },
  render: function() {
    var listPokemons = this.state.pokemons.map(function(pokemon, index){
      id = index + 1;
      return <Pokemon key={pokemon.url} link={"/pokemon/" + id} pokemon={pokemon.name} />;
    });
    return (
      <div>
        <ul>{listPokemons}</ul>
      </div>
    );
  }
});

module.exports = MainPage;
