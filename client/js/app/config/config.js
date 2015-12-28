require.config({
    baseUrl: "js/app",
    // 3rd party script alias names (Easier to type "jquery" than "lib/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        "vendor": "lib/vendor",
        // Core Libraries
        "jquery":"../lib/vendor/jquery/dist/jquery",
        "jqueryui":"../lib/vendor/jquery-ui/jquery-ui",
        "underscore":"../lib/vendor/lodash/lodash",
        "backbone":"../lib/vendor/backbone/backbone",
        "marionette":"../lib/vendor/backbone.marionette/lib/backbone.marionette",
        "handlebars":"../lib/vendor/handlebars/handlebars", 
        "hbs":"../lib/vendor/hbs/hbs",
        "i18nprecompile":"../lib/vendor/i18nprecompile",
        "json2":"../lib/vendor/json2",
        "jasmine": "../lib/vendor/jasmine",
        "jasmine-html": "../lib/vendor/jasmine-html",

        // Plugins
        //"backbone.validateAll":"../lib/vendor/plugins/Backbone.validateAll",
        "bootstrap":"../lib/vendor/bootstrap/dist/js/bootstrap",
        "text":"../lib/vendor/plugins/text",
        "jasminejquery": "../lib/vendor/plugins/jasmine-jquery"
    },

    map: {
        '*': {
            'models/employee': 'models/memory/employee'
        }
    },
    
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        // Twitter Bootstrap jQuery plugins
        "jquery": {
            "deps": ["underscore"]
        },
        "bootstrap":["jquery"],
        // jQueryUI
        "jqueryui":["jquery"],

        // Backbone
        "backbone":{
            // Depends on underscore/lodash and jQuery
            "deps":["underscore", "jquery"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        //Marionette
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            "exports":"Marionette"
        },
        //Handlebars
        "handlebars":{
            "exports":"Handlebars"
        },
        // Backbone.validateAll plugin that depends on Backbone
        "backbone.validateAll":["backbone"],

        "jasmine": {
            // Exports the global 'window.jasmine' object
            "exports": "jasmine"
        },

        "jasmine-html": {
            "deps": ["jasmine"],
            "exports": "jasmine"
        }
    },
    // hbs config - must duplicate in Gruntfile.js Require build
    hbs: {
        templateExtension: "html",
        helperDirectory: "templates/helpers/",
        i18nDirectory: "templates/i18n/",

        compileOptions: {}        // options object which is passed to Handlebars compiler
    }
});