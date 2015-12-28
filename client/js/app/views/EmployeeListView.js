define(['backbone', 'marionette', 'jquery', 'views/EmployeeListItem'],
    function (Backbone, Marionette, $, jqm, EmployeeListItem) {
        return Backbone.Marionette.CollectionView.extend({
            
            childView: EmployeeListItem,
            
            initialize: function() {
                this.collection.on("reset", this.render, this);
            	this.collection.on("add", this.render, this);
            }

           
        });
    });