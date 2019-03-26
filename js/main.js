(() => {

	let myTL = new TimelineLite();

	myTL.to("#background", 0.5, {rotation: 180, scaleX: 1.1, scaleY: 1.1, transformOrigin: "50% 50%"})
	.to("#small_type", 1, {rotation: 180, scaleX: 1.1, scaleY: 1.1, transformOrigin: "50% 50%"});

})();
