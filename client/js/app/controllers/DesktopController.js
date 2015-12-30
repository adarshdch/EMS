define(['App', 'backbone', 'marionette', 'views/MasterLayout/default', 'views/FooterLayout/default', 'views/HomeView/default', 'views/ContactView/default'],
    function (App, Backbone, Marionette, MasterLayout, FooterLayout, HomeView, ContactView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.RootLayout =  new MasterLayout();
        },
        //gets mapped to in AppRouter's appRoutes

        home: function()
        {
            App.RootLayout.render();
            App.RootLayout.showChildView('contentRegion', new HomeView());
        },


        contact: function(){
          App.RootLayout.render();
          App.RootLayout.showChildView('contentRegion', new ContactView());
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