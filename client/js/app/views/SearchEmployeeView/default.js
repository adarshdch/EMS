define([ 'models/employee', 'jquery', 'views/EmployeeListItemView/default', 'hbs!./default', 'backbone', 'marionette'],
    function (models, $, EmployeeListItemView, template) {
        return Backbone.Marionette.CompositeView.extend({
            
            template: template,

            initialize: function()
						{
							this.collection = new models.EmployeeCollection();
						},

						childViewContainer: '.employee-list',
						childView: EmployeeListItemView,

        		events: {
		            "keyup .dropdown-toggle": "search",
		            "keypress .dropdown-toggle": "onkeypress"
		        },

		        search: function (event) {
		            var key = $('#searchText').val();
		            this.collection.fetch({reset: true, data: {name: key}, success: function () {
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