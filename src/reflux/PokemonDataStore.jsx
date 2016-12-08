var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var PokemonDataStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon2: function(link) {
    HTTP.get(link)
    .then(function(json) {
      // console.log(json);
      this.pokemon = json;
      this.trigger('change', this.pokemon);
    }.bind(this));
  }
});

module.exports = PokemonDataStore;
