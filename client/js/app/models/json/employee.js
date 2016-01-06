define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        Employee = Backbone.Model.extend({

            urlRoot: "http://localhost:8005/api/employees",

            initialize: function () {
                this.reports = new EmployeeCollection();
                //this.reports.url = this.urlRoot;
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            url: "http://localhost:8005/api/employees"

        });

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection
    };

});