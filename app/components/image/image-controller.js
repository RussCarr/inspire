function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService();

	function draw(res) {
		var image = res
		var imageUrl = "url(" + image.url + ")"
		var body = document.getElementById("body")
		body.style.backgroundImage = imageUrl;
		body.style.backgroundAttachment = "fixed";
		body.style.backgroundSize = "100%"
			getClock()		
	}
	
	this.getImage = function getImage() {
		imageService.getImage(draw)
		
	}
	function checkTime(i) {
		if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
		return i;
	}
	function getClock() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		document.getElementById('txt').innerHTML =
			h + ":" + m + ":" + s;
		var t = setTimeout(getClock, 500);
		
	}

}


