function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService();

	function draw(res) {
		var image = res
		var imageUrl = "url(" + image.url + ")"
		body = document.getElementById("body")
		body.style.backgroundImage = imageUrl;
		body.style.backgroundAttachment = "fixed";
		body.style.backgroundSize = "100%"
					
	}
	
	this.getImage = function getImage() {
		imageService.getImage(draw)
		
	}

}


