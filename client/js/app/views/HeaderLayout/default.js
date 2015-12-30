define(['hbs!./default', 'views/Region/HeaderRegion', 'views/SearchEmployeeView/default',  'backbone', 'marionette'],
		function(template, HeaderRegion, SearchEmployeeView) {
				
				return Backbone.Marionette.LayoutView.extend({
						
						template: template,

						initialize: function()
						{
							
						},

						regions: {
								searchEmployeeRegion: '#searchEmployee'
						},

						onShow: function() {
							this.showChildView('searchEmployeeRegion', new SearchEmployeeView());
						}
				});

		});