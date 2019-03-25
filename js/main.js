(() => {

	let badge = document.querySelector("img");

	function aniImage() {
		TweenMax.to(badge, 0.7, { scaleX: 1.025, scaleY: 1.025, rotation: 50, ease:Bounce.easeOut, onComplete: aniFooterText});
	}

	function aniFooterText() {
		TweenMax.to("h3", 0.7, { scaleX: 2, scaleY: 2, ease: Elastic.easeOut});
	}

	// aniImage();

	badge.addEventListener("mouseover", aniImage);

})();
