define(['hbs!./default', 'views/Region/HeaderRegion', 'views/HeaderLayout/default', 'views/HomeView/default', 'views/Region/FooterRegion', 'views/FooterLayout/default'],
		function(template, HeaderRegion, HeaderLayout, HomeView, FooterRegion, FooterLayout) {

				return Backbone.Marionette.LayoutView.extend({
						el: 'body',
						template: template,

						initialize: function()
						{
							
						},

						regions: {
								headerRegion: {
									regionClass: HeaderRegion
								},

								contentRegion: '.content',

								footerRegion: {
									regionClass: FooterRegion
								}
						},

						onRender: function() {
							this.showChildView('headerRegion', new HeaderLayout());
							this.showChildView('footerRegion', new FooterLayout());
						},

						events: {
		            "click": "handleClick"
		        },

		        handleClick: function(){
		        	$('.dropdown').removeClass('open');
		        },


				});
		});