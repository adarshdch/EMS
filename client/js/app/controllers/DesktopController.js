define(['App', 'models/employee', 'backbone', 'marionette', 'views/MasterLayout/default', 'views/FooterLayout/default', 'views/HomeView/default', 'views/ContactView/default', 'views/EmployeeView/default'],
    function (App, models, Backbone, Marionette, MasterLayout, FooterLayout, HomeView, ContactView, EmployeeView) {
        
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.RootLayout =  new MasterLayout();
            App.RootLayout.render();
        },
        //gets mapped to in AppRouter's appRoutes

        home: function()
        {
            App.RootLayout.showChildView('contentRegion', new HomeView());
        },


        contact: function(){
          App.RootLayout.showChildView('contentRegion', new ContactView());
        },

        employees: function(id){
            var employee = new models.Employee({id: id});
            employee.fetch({
                success: function (data) {
                    App.RootLayout.showChildView('contentRegion', new EmployeeView({model: data}));
                }
            });
        }
    });
});