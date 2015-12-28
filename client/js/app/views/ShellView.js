define(['jquery', 'models/employee', 'hbs!templates/shell', 'views/HomeView', 'views/EmployeeListView', 'backbone', 'marionette'],
		function($, models, template, HomeView, EmployeeListView, Backbone) {
				//ItemView provides some default rendering logic
				return Backbone.Marionette.LayoutView.extend({
						template: template,
						initialize: function()
						{
							this.employeeList = new models.EmployeeCollection();
						},

						regions: {
								contentRegion: "#content",
								mainRegion: ".employee-list"
						},

						onBeforeShow: function() {
							var listView = new EmployeeListView({collection: this.employeeList});
							this.showChildView('contentRegion', new HomeView());
							this.showChildView('mainRegion', listView);
						},

						events: {
				            "keyup .search-query": "search",
				            "keypress .search-query": "onkeypress"
				        },

				        search: function (event) {
				        	//$('.dropdown').addClass('open');
				        	//return;
				            var key = $('#searchText').val();
				            this.employeeList.fetch({reset: true, data: {name: key}, success: function () {
				                setTimeout(function () {
				                    $('.dropdown').addClass('open');
				                });
				            }});
				        },

				        onkeypress: function (event) {
				            if (event.keyCode === 13) { // enter key pressed
				                event.preventDefault();
				            }
				        }
				});
		});