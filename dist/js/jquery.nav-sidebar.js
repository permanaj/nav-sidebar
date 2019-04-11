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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcXVlcnkubmF2LXNpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQkLmZuLmFwcFNpZGViYXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcblx0XHRcdHNpZGViYXI6ICcuc2lkZWJhcicsXG5cdFx0XHRtYWluOiAnLm1haW4nLFxuXHRcdFx0Y29sbGFwc2VUcmlnZ2VyOiAnLmRlc2t0b3AtY29sbGFwc2UnLFxuXHRcdFx0Y29sbGFwc2VDc3M6ICducy1ib2R5LWNvbGxhcHNlZCcsXG5cdFx0XHRkZWZhdWx0U3RhdGU6ICdleHBhbmRlZCcsXG5cblx0XHRcdGNzc01haW5FeHBhbmRlZDogJ25zLW1haW4tZXhwYW5kZWQnLFxuXHRcdFx0Y3NzTWFpbkNvbGxhcHNlZDogJ25zLW1haW4tY29sbGFwc2VkJyxcblx0XHRcdGNzc1NpZGViYXJDb2xsYXBzZWQ6ICducy1zaWRlYmFyLWNvbGxhcHNlZCcsXG5cdFx0XHRjc3NTaWRlYmFyRXhwYW5kZWQ6ICducy1zaWRlYmFyLWV4cGFuZGVkJyxcblx0XHRcdGNzc05zSW5pdGlhbGl6ZWQ6ICducy1pbml0aWFsaXplZCcsXG5cdFx0XHRjc3NOc1NpZGViYXI6ICducy1zaWRlYmFyJyxcblx0XHRcdGNzc05zTWFpbjogJ25zLW1haW4nXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRmdW5jdGlvbiBjb2xsYXBzZVNpZGViYXIobnNCb2R5LCBuc1NpZGViYXIsIG5zTWFpbikge1xuXHRcdFx0bnNTaWRlYmFyLmFkZENsYXNzKHNldHRpbmdzLmNzc1NpZGViYXJDb2xsYXBzZWQpLnJlbW92ZUNsYXNzKHNldHRpbmdzLmNzc1NpZGViYXJFeHBhbmRlZClcblx0XHRcdG5zQm9keS5hZGRDbGFzcyhzZXR0aW5ncy5jb2xsYXBzZUNzcyk7XG5cdFx0XHRuc01haW4uYWRkQ2xhc3Moc2V0dGluZ3MuY3NzTWFpbkV4cGFuZGVkKS5yZW1vdmVDbGFzcyhzZXR0aW5ncy5jc3NNYWluQ29sbGFwc2VkKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBleHBhbmRTaWRlYmFyKG5zQm9keSwgbnNTaWRlYmFyLCBuc01haW4pIHtcblx0XHRcdG5zU2lkZWJhci5hZGRDbGFzcyhzZXR0aW5ncy5jc3NTaWRlYmFyRXhwYW5kZWQpLnJlbW92ZUNsYXNzKHNldHRpbmdzLmNzc1NpZGViYXJDb2xsYXBzZWQpO1xuXHRcdFx0bnNCb2R5LnJlbW92ZUNsYXNzKHNldHRpbmdzLmNvbGxhcHNlQ3NzKTtcblx0XHRcdG5zTWFpbi5hZGRDbGFzcyhzZXR0aW5ncy5jc3NNYWluQ29sbGFwc2VkKS5yZW1vdmVDbGFzcyhzZXR0aW5ncy5jc3NNYWluRXhwYW5kZWQpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgJGFwcFNpZGViYXIgPSAkKHNldHRpbmdzLnNpZGViYXIpO1xuXHRcdFx0dmFyIHNpZGViYXJXaWR0aCA9ICRhcHBTaWRlYmFyLmNzcygnd2lkdGgnKTtcblx0XHRcdHZhciAkZGVrc3RvcENvbGxhcHNlVHJpZ2dlciA9ICQoc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyKTtcblx0XHRcdHZhciAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdHZhciAkYXBwTWFpbiA9ICQoc2V0dGluZ3MubWFpbik7XG5cblx0XHRcdCRhcHBTaWRlYmFyLmNoaWxkcmVuKCkud3JhcEFsbCgnPGRpdiBjbGFzcz1cIm5zLXNpZGViYXItaW5uZXJcIiAvPicpO1xuXHRcdFx0JGFwcFNpZGViYXIuYWRkQ2xhc3Moc2V0dGluZ3MuY3NzTnNJbml0aWFsaXplZCkuYWRkQ2xhc3Moc2V0dGluZ3MuY3NzTnNTaWRlYmFyKTtcblx0XHRcdCRhcHBNYWluLmFkZENsYXNzKHNldHRpbmdzLmNzc05zTWFpbik7XG5cblx0XHRcdC8vIERlZmF1bHQgc3RhdGVcblx0XHRcdGlmIChzZXR0aW5ncy5kZWZhdWx0U3RhdGUgPT09ICdleHBhbmRlZCcpIHtcblx0XHRcdFx0ZXhwYW5kU2lkZWJhcigkYm9keSwgJGFwcFNpZGViYXIsICRhcHBNYWluKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb2xsYXBzZVNpZGViYXIoJGJvZHksICRhcHBTaWRlYmFyLCAkYXBwTWFpbik7XG5cdFx0XHR9XG5cblx0XHRcdCRkZWtzdG9wQ29sbGFwc2VUcmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKCRib2R5Lmhhc0NsYXNzKHNldHRpbmdzLmNvbGxhcHNlQ3NzKSkge1xuXHRcdFx0XHRcdGV4cGFuZFNpZGViYXIoJGJvZHksICRhcHBTaWRlYmFyLCAkYXBwTWFpbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y29sbGFwc2VTaWRlYmFyKCRib2R5LCAkYXBwU2lkZWJhciwgJGFwcE1haW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufSkoalF1ZXJ5KTtcbiJdLCJmaWxlIjoianF1ZXJ5Lm5hdi1zaWRlYmFyLmpzIn0=
