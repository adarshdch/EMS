define(['jquery', 'models/employee', 'hbs!templates/shell', 'views/HomeView', 'views/SearchEmployeeView', 'backbone', 'marionette'],
		function($, models, template, HomeView, SearchEmployeeView, Backbone) {
				//ItemView provides some default rendering logic
				return Backbone.Marionette.LayoutView.extend({
						el: 'body',
						template: template,

						initialize: function()
						{
							this.employeeList = new models.EmployeeCollection();
						},

						regions: {
								contentRegion: "#content",
								mainRegion: "#employee-dropdown"
						},

						onBeforeShow: function() {
							this.showChildView('contentRegion', new HomeView());
							this.showChildView('mainRegion', new SearchEmployeeView());
						}

				});
		});