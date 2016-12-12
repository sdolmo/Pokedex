var React = require('react');
var Pokemon = require('./Pokemon.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/Actions.jsx');
var PokemonStore = require('../reflux/PokemonStore.jsx');

// capture results from API to iterate through the json and render the pokemon
var MainPage = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return {pokemons: [], types: [], next: ""};
  },
  componentWillMount: function() {
    Actions.getPokemons('/pokemon-species');
  },
  onChange: function(event, pokemons) {
    this.setState({pokemons: pokemons.results});
    var next = "/pokemon-species/?offset=";
    this.setState({next: next})
  },
  render: function() {
    var id = 0;
    var img;
    var name;
    
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var listPokemons = this.state.pokemons.map(function(pokemon, index){
      id = index + 1;
      img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
      name = capitalize(pokemon.name);
      return <Pokemon key={pokemon.url} link={"/pokemon/" + id} pid={id} pokemon={name} image={img} />;
    });

    var styles = {
      paddingTop: 50,
      textAlign: "center"
    };

    return (
      <div>
        <div style={styles}>
          <ul>{listPokemons}</ul>
        </div>
      </div>
    );
  }
});

module.exports = MainPage;
