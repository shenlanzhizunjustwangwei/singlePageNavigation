var header = $(".js-header");
var headerH = header.innerHeight();

// $( window ).resize(function() {
// 	headerH = header.innerHeight();
// });

function headerFixing() {
	$("body").css({
		paddingTop : headerH
	});

	header.css({
		position : "fixed",
		top : 0,
		left : 0,
		right : 0
	});
}

// Just fixing our header
headerFixing();

/* menu toggle button */
function toggleMainMenu(x) {
	x.classList.toggle("change");
	menuShowHide();
}

/* показ/скрытие меню */
function menuShowHide(){

	var menu = $(".js-menu");

	menu.slideToggle(200, function(){
		if (menu.is(":not(:visible)")) {
			menu.removeAttr("style");
		}
	});

}

$(".js-menu").singlePageNavigation({
	exceptClass : "menu__element_except",
	disabledClass : "menu__element_no-clickable",
	current : "active",
	duration : 500,
	delay : 0,
	ease : "swing",
	offset : headerH,
	scrollingOffsetBottom : 0.4, // 0.00 - 1.00 - percents, 1 - xxx - pixels
	changeAddress : false,
	currentClickable : true,
	beforeScrolling : function(){
		// console.log("start")
	},
	finishScrolling : function(){
		// console.log("finish")
	}
});
