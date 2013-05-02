function init() {
	document.addEventListener("deviceready", deviceready, true);
}

function deviceready() {

	onCamSuccess = function(imageData) {
		var image = $("#camImg")[0];
   		image.src = "data:image/jpeg;base64," + imageData;
	};

	onCamError = function() {
		$("#status").html("An error with the camera. Sorry");
	};

	$("#newPicLink").click(function(e) {
		navigator.camera.getPicture(onCamSuccess,onCamError, 
				{sourceType:Camera.PictureSourceType.CAMERA, 
				quality:50, targetWidth: 200, targetHeight:200});
		e.preventDefault();
	});

	$("#existingPicLink").click(function(e) {
		navigator.camera.getPicture(onCamSuccess,onCamError, 
				{sourceType:Camera.PictureSourceType.PHOTOLIBRARY, 
				quality:50, targetWidth: 200, targetHeight: 200});
		e.preventDefault();
	});
}