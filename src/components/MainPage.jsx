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
    var next = "/pokemon-species/?offset=" + 20;
    this.setState({next: next})
  },
  handleLoad: function(){
    
  },
  render: function() {
    var id = 0
    var listPokemons = this.state.pokemons.map(function(pokemon, index){
      id = index + 1;
      var img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
      return <Pokemon key={pokemon.url} link={"/pokemon/" + id} pid={id} pokemon={pokemon.name} image={img} />;
    });

    var styles = {
      marginTop: 20,
      textAlign: "center"
    };

    return (
      <div>
        <div style={styles}>
          <ul>{listPokemons}</ul>
        </div>
        <div><button onClick={this.handleLoad}>Load More</button></div>
      </div>
    );
  }
});

module.exports = MainPage;
