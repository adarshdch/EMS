define(['backbone', 'marionette'], function(Backbone, Marionette) {
   return Backbone.Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "home",
           ":id": "welldone",
           "employees/:id": "welldone",
           "contact/:id": "welldone"
       }

       
   });
});