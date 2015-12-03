$(function () {
	var $toggle = $('.menu-toggle')
	var $menu = $('.navigation ul')
	$('.menu-toggle').on('touchstart', function (e) {
		e.stopPropagation()
		$menu.toggle()
	})
	$(document).on('touchstart', function () {
		if($menu.is(':visible')) $menu.fadeOut()
	})
})