$(function(){
	console.log('DOM loaded - you can have fun');
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 2700);
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 900, moveFirstSlide);
	};
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};
});
	