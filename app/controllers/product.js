import Ember from 'ember';

export default Ember.Controller.extend({

	price:200,
	computedPrice: function(){
		return 'Rs. '+ this.get('price');
	}.property('price')
});
