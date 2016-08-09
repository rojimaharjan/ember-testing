import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:product', 'Unit | Controller | product', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

//test controller

test('my first unit testing', function(){
	var controller= this.subject();
	// price start at 200
	let price = controller.get('price');
	equal(controller.get('computedPrice'), `Rs. ${price}`, `computed price should be equal to "Rs. ${price}"`);
	price = 1000;
	controller.set('price', price);
	equal(controller.get('computedPrice'), `Rs. ${price}`, `computed price should be equal to "Rs. ${price}"`);

	price = 400;
	controller.set('price', price);
	equal(controller.get('computedPrice'), `Rs. ${price}`, `computed price should be equal to "Rs. ${price}"`);

});
