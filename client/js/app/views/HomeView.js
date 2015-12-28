define(['backbone', 'marionette', 'jquery', 'hbs!templates/home'],
    function (Backbone, Marionette, $, jqm, template) {
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