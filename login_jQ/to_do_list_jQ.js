$(document).ready(function(){
	$("#logout").text("Welcome "+localStorage['uid']);

	var close = document.getElementsByClassName+("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}

	$("#clickable").click(function(){	
		var inputValue = $("#myInput").val();
		var inputdate = $("#myDate").val();
		var inputdesc = $("textarea").val();
		var d = new Date(inputdate);
		var curdate = new Date();
		if(inputValue.length < 3){
			alert("TaskName is too small");
			return false;
		}
		if(curdate > d){
			alert("Date is not valid");
			return false;
		}
		if(inputdesc == ''){
			alert("Description is empty");
			return false;
		}
		if(inputdesc > 50){
			alert("Description is too much");
			return false;
		}
		var li = $("<li></li>").text("TaskName: "+inputValue +" Date: " +inputdate+" Description:"+inputdesc);
		if (inputValue === '') {
		  alert("You must write something!");
		} else {
			 $("#myUL").append(li);
		}

		$("#myInput").val("");
		$("#myDate").val("");
		$("textarea").val("");
		var span = $("<span></span>").text("\u00D7");
		span.addClass("close");
		li.append(span);

		for (i = 0; i < close.length; i++) {
		  close[i].onclick = function() {
		    var div = this.parentElement;
		    div.style.display = "none";
		  }
		}
	});
});
