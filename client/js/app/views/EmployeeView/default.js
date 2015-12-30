define(['jquery', 'hbs!./default', 'models/employee', 'views/EmployeeListView/default', 'backbone', 'marionette'],
		function($, template, models, EmployeeListView) {
				
				return Backbone.Marionette.ItemView.extend({
						
						template: template,

						initialize: function()
						{
							
						},

						onRender: function(){
							var that = this;
							this.model.reports.fetch({
							  success: function (data) {
							      if (data.length === 0) {
							      	that.$el.find('.no-reports').show();
							      }
							  }
							});
							var listView = new EmployeeListView({collection: this.model.reports, el: $('.report-list', this.el)});
							listView.render();
							return this;
						}


				});

		});