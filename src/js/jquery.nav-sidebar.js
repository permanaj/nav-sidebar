(function ($) {
	'use strict';

	$.fn.appSidebar = function (options) {
		var settings = $.extend({
			sidebar: '.sidebar',
			main: '.main',
			collapseTrigger: '.desktop-collapse',
			collapseCss: 'ns-body-collapsed',
			defaultState: 'expanded',

			cssMainExpanded: 'ns-main-expanded',
			cssMainCollapsed: 'ns-main-collapsed',
			cssSidebarCollapsed: 'ns-sidebar-collapsed',
			cssSidebarExpanded: 'ns-sidebar-expanded',
			cssNsInitialized: 'ns-initialized',
			cssNsSidebar: 'ns-sidebar',
			cssNsMain: 'ns-main'
		}, options);

		function collapseSidebar(nsBody, nsSidebar, nsMain) {
			nsSidebar.addClass(settings.cssSidebarCollapsed).removeClass(settings.cssSidebarExpanded)
			nsBody.addClass(settings.collapseCss);
			nsMain.addClass(settings.cssMainExpanded).removeClass(settings.cssMainCollapsed);
		}

		function expandSidebar(nsBody, nsSidebar, nsMain) {
			nsSidebar.addClass(settings.cssSidebarExpanded).removeClass(settings.cssSidebarCollapsed);
			nsBody.removeClass(settings.collapseCss);
			nsMain.addClass(settings.cssMainCollapsed).removeClass(settings.cssMainExpanded)
		}

		return this.each(function () {
			var $appSidebar = $(settings.sidebar);
			var sidebarWidth = $appSidebar.css('width');
			var $dekstopCollapseTrigger = $(settings.collapseTrigger);
			var $body = $('body');
			var $appMain = $(settings.main);

			$appSidebar.children().wrapAll('<div class="ns-sidebar-inner" />');
			$appSidebar.addClass(settings.cssNsInitialized).addClass(settings.cssNsSidebar);
			$appMain.addClass(settings.cssNsMain);

			// Default state
			if (settings.defaultState === 'expanded') {
				expandSidebar($body, $appSidebar, $appMain);
			}
			else {
				collapseSidebar($body, $appSidebar, $appMain);
			}

			$dekstopCollapseTrigger.on('click', function () {
				if ($body.hasClass(settings.collapseCss)) {
					expandSidebar($body, $appSidebar, $appMain);
				}
				else {
					collapseSidebar($body, $appSidebar, $appMain);
				}
			});
		});
	}
})(jQuery);
