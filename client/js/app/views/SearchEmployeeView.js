define([ 'models/employee', 'backbone', 'marionette', 'jquery', 'views/EmployeeListView', 'hbs!templates/searchEmployee'],
    function (models, Backbone, Marionette, $, EmployeeListView, template) {
        return Backbone.Marionette.LayoutView.extend({
            
            template: template,

            initialize: function()
						{
							this.employeeList = new models.EmployeeCollection();
						},

            regions: {
								mainRegion: ".employee-list"
						},

						onBeforeShow: function() {
							var listView = new EmployeeListView({collection: this.employeeList});
							this.showChildView('mainRegion', listView);
						},

        		events: {
		            "keyup .dropdown-toggle": "search",
		            "keypress .dropdown-toggle": "onkeypress"
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