import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model){
		controller.set('posts', []);
	},
	actions:{
		doSomething:function(){
			var title= this.controller.get('title');
			console.log(title);
			this.controller.get('posts').pushObject({
				title:title
			});
		}
	}
});
