var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/Actions.jsx');
var PokemonStore = require('../reflux/PokemonStore.jsx');
var PokemonDataStore = require('../reflux/PokemonDataStore.jsx');

var DetailsPage = React.createClass({
  mixins: [Reflux.listenTo(PokemonDataStore, 'onChange2'), Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return {pid: "", description: "", name: "", image:"", height:"", weight:"", category: "", abilities: [], type: []};
  },
  componentWillMount: function() {
    this.setState({pid: this.props.params.pokemonId});
    var id = this.props.params.pokemonId;
    var link = "/pokemon-species/" + id;
    Actions.getPokemon1(link);
    var link2 = "/pokemon/" + id;
    Actions.getPokemon2(link2)
  },
  onChange: function(event, pokemon) {
    // console.log(pokemon);
    this.setState({description: pokemon.flavor_text_entries[1].flavor_text});
    this.setState({name: pokemon.names[0].name});
    var img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.state.pid + ".png";
    this.setState({image: img});
    this.setState({category: pokemon.genera[0].genus})
  },
  onChange2: function(event, pokemon) {
    // console.log(pokemon);
    this.setState({height: pokemon.height});
    this.setState({weight: pokemon.weight});
    var types = [];
    for(var i = 0; i < pokemon.types.length; i++){
      types.push(pokemon.types[i].type.name);
    };
    this.setState({type: types});
    var ability = [];
    for(var i = 0; i < pokemon.abilities.length; i++){
      ability.push(pokemon.abilities[i].ability.name);
    };
    this.setState({abilities: ability})
  },
  render: function() {
    // console.log(this.state.pid);
    var PokemonInfo = {
      id: this.state.pid,
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      height: this.state.height,
      weight: this.state.weight,
      category: this.state.category,
      abilities: this.state.abilities,
      types: this.state.type
    };
    var listAbilities = PokemonInfo.abilities.map(function(ability, index){
      return <li>{ability}</li>;
    });
    var listTypes = PokemonInfo.types.map(function(type){
      return <li>{type}</li>;
    });
    var styles = {
      textAlign: "center"
    };
    return (
      <div style={styles}>
        <ul>
          <li>{PokemonInfo.name}</li>
          <li><img src={PokemonInfo.image} /></li>
          <li>Description: {PokemonInfo.description}</li>
          <li>Height: {PokemonInfo.height}</li>
          <li>Weight: {PokemonInfo.weight}</li>
          <li>Category: {PokemonInfo.category}</li>
          <li>Abilities:</li>
          <li>{listAbilities}</li>
          <li>Type:</li>
          <li>{listTypes}</li>
        </ul>
      </div>
    );
  }
});

module.exports = DetailsPage;
