define(['hbs!./default', 'views/Region/CopyrightRegion', 'views/CopyrightView/default', 'backbone', 'marionette'],
		function(template, CopyrightRegion, CopyrightView, Backbone, Marionette) {
				
				return Backbone.Marionette.LayoutView.extend({
						
						template: template,
						tagName: 'div',
						
						attributes: {
							'class': 'container'

						},

						initialize: function(){
							
						},

						regions: {
								copyrightRegion: 
								{
									regionClass: CopyrightRegion
								}
						},

						onShow: function() {
							this.showChildView('copyrightRegion', new CopyrightView());
						}
				});

		});