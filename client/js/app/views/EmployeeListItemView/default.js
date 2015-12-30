define(['hbs!./default', 'jquery', 'backbone', 'marionette'],
    function (template, $) {
        
        return Backbone.Marionette.ItemView.extend({
            
            template: template,
            
            tagName: 'li',

            initialize: function() {
                
            },
            onRender: function() {
                
            }
        });
    });