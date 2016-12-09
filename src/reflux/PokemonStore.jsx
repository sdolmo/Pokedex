var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemons: function(link) {
    HTTP.get(link)
    .then(function(json) {
      console.log(json);
      var pokes = json
      this.pokemons = pokes;
      this.trigger('change', this.pokemons);
    }.bind(this));
  },
  getPokemon1: function(link) {
    HTTP.get(link)
    .then(function(json) {
      // console.log(json);
      this.pokemon = json;
      this.trigger('change', this.pokemon);
    }.bind(this));
  }
});

module.exports = PokemonStore;
