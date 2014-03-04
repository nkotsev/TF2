var user;
function handleUserData(userData){
	//userData = "\"" + userData + "\""
	user = userData;
	var borderCol;
	var onlineText;
	//console.log(user[0].Display);
	if (user.isOnline){
		borderCol = "#00B800";
		onlineText = "User is online."
	}
	else if(user.isInGame){
		borderCol = "#1804CC";
		onlineText = "User is in a game."
	}
	else{
		borderCol = "#334c4c";
		onlineText = "User is offline."
	}
	$(".userInfoContainer").html("");
	$(".userInfoContainer").append("<p class='.text-center' id='username'> " +user.username+ "</p>" +
		"<img src='" + user.avatarURL +"' class='img-rounded col-lg-4'>"+ 
		"<p class='col-lg-6'>" + user.location + "</p>");
		"<p class='col-lg-4' style=' color: "+ borderCol +" '>" + onlineText + "</p>"
	$(".userInfoContainer").show();
	alert('shouldHaveDoneIT');
}

$(document).ready(function(){
	
	
	$('#search').click(function(){
		
		var userName = $("#searchUserBox").val();
		if (userName !== ""){	
			$.ajax({
				method:'POST',
				url:'tf2/userSearch/',
				data: userName,
				contentType: 'text/plain',
				success: handleUserData
			});
		}
	});
});