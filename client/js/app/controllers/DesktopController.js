define(['App', 'backbone', 'marionette', 'views/ShellView'],
    function (App, Backbone, Marionette, ShellView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            
            
        },
        //gets mapped to in AppRouter's appRoutes

        home: function()
        {
            App.RootLayout.show(new ShellView());
        },

        viewEmployee: function(id){
            alert('view ' + id);
        },

        welldone : function(){
            alert("done");
            return "<div>welldone</div>";
        }
    });
});