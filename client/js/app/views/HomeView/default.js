define(['hbs!./default', 'backbone', 'marionette'],
		function(template) {
				
				return Backbone.Marionette.ItemView.extend({
						
						template: template,

						initialize: function()
						{
							
						}


				});

		});