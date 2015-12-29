define(['backbone', 'marionette', 'jquery', 'hbs!templates/employeeListItem'],
    function (Backbone, Marionette, $, template) {
        return Backbone.Marionette.ItemView.extend({
            
            template: template,
            
            tagName: 'li',

            initialize: function() {
                
            },
            onRender: function() {
                
            }
        });
    });