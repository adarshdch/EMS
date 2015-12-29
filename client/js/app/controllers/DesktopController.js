define(['App', 'backbone', 'marionette', 'views/ShellView', 'views/ContactView', 'views/HomeView', 'views/SearchEmployeeView'],
    function (App, Backbone, Marionette, ShellView, ContactView, HomeView, SearchEmployeeView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            
            
        },
        //gets mapped to in AppRouter's appRoutes

        home: function()
        {
            App.RootLayout =  new ShellView();
            App.RootLayout.render();
            App.RootLayout.showChildView('contentRegion', new HomeView());
            App.RootLayout.showChildView('mainRegion', new SearchEmployeeView());

            //App.RootLayout.show(new ShellView());
        },


        contact: function(){
          App.RootLayout.show(new ContactView());  

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