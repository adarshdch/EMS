define(['jquery', 'hbs!templates/contact', 'backbone', 'marionette'],
    function ($, template, Backbone, Marionette) {
        return Backbone.Marionette.ItemView.extend({

            template: template,

            initialize: function() {
                //_.bindAll(this);
            },
            onRender: function() {
                //this.$el.navbar();
            }
        });
    });