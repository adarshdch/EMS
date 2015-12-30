// Include Desktop Specific JavaScript files here (or inside of your Desktop Controller, or differentiate based off App.mobile === false)
require(["App", "routers/RootRouter", "controllers/DesktopController", "jquery", "backbone", "marionette", "jqueryui", "bootstrap"],
    function (App, RootRouter, DesktopController) {
        App.RootRouter = new RootRouter({
            controller: new DesktopController()
        });
        // Start Marionette Application in desktop mode (default)
        App.start();

    });