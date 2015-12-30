define(['views/EmployeeListItemView/default', 'backbone', 'marionette'],
    function (EmployeeListItemView) {

        return Backbone.Marionette.CollectionView.extend({
            
            childView: EmployeeListItemView,
            
            initialize: function() {
              this.collection.on("reset", this.render, this);
            	this.collection.on("add", this.render, this);
            }

           
        });
    });